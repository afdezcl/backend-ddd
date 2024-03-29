/* eslint-disable @typescript-eslint/no-var-requires */
import { Router, Request, Response } from 'express'
import { ValidationError, validationResult } from 'express-validator'
import glob from 'glob'
import httpStatus from 'http-status'

export function registerRoutes (router: Router) {
  const routes = glob.sync(__dirname + '/**/*.route.*')
  routes.map(route => register(route, router))
}

function register (routePath: string, router: Router) {
  const route = require(routePath)
  route.register(router)
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
