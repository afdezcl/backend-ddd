import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from './Controller'
import { SearchById } from '../../../Contexts/Courses/application/SearchById'

export class CoursesGetByIdController implements Controller {
  constructor(private readonly searchById: SearchById) { }

  async run(req: Request, res: Response) {
    const id: string = req.params.id

    try {
      const course = await this.searchById.run(id)

      res.json(course)
    } catch (error: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }

    res.status(httpStatus.OK).send()
  }
}
