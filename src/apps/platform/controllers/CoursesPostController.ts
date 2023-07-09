import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { CourseCreator } from '../../../Contexts/Courses/application/CourseCreator'
import { Controller } from './Controller'

export class CoursesPostController implements Controller {
  constructor(private readonly courseCreator: CourseCreator) { }

  async run(req: Request, res: Response) {
    const id: string = req.body.id
    const name: string = req.body.name
    const duration: string = req.body.duration

    try {
      await this.courseCreator.run({ id, name, duration })
    } catch (error: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }

    res.status(httpStatus.CREATED).send()
  }
}
