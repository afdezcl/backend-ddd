import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from './Controller'
import { SearchAll } from '../../../Contexts/Courses/application/SearchAll'

export class CoursesGetController implements Controller {
  constructor(private readonly searchAll: SearchAll) { }

  async run(req: Request, res: Response) {
    try {
      await this.searchAll.run()
    } catch (error: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }

    res.status(httpStatus.OK).send()
  }
}
