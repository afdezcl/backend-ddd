/* eslint-disable @typescript-eslint/no-var-requires */
import { Router, Request, Response } from 'express'
import { ValidationError, validationResult } from 'express-validator'
import httpStatus from 'http-status'
import { CustomHandler } from '../types'
import { Controller } from '../controllers/Controller'
import { container } from '../dependency-injection/dependency-injection'
import { healthRoutes } from './status.route'
import { coursesRoutes } from './courses.route'

const handleWith: CustomHandler = (name) => (req, res) => container.resolve<Controller>(name).handle(req, res)

export function registerRoutes(router: Router) {
  const routes = [healthRoutes, coursesRoutes]
  routes.map((route) => {
    route(router, handleWith)
  })
}

export function validateReqSchema (req: Request, res: Response, next: () => void) {
  const validationErrors = validationResult(req)
  if (validationErrors.isEmpty()) {
    return next()
  }
  const errors = validationErrors.array().map((err: ValidationError) => ({ [err.param]: err.msg }))

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors
  })
}
