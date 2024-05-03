import { Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from './Controller'
import { SearchAll } from '../../../Contexts/Courses/application/SearchAll'
import { CustomRequest } from '../types'

export class CoursesGetController implements Controller {
  constructor(private readonly searchAll: SearchAll) { }

  async handle(req: CustomRequest, res: Response) {
    try {
      const courses = await this.searchAll.run()

      res.json(courses)
    } catch (error: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }

    res.status(httpStatus.OK).send()
  }
}
