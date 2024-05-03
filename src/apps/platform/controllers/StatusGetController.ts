import type { Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from './Controller'
import { CustomRequest } from '../types'

export default class StatusGetController implements Controller {
  async handle (req: CustomRequest, res: Response) {
    res.status(httpStatus.OK).send()
  }
}
