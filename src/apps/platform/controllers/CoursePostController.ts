import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { CourseCreator } from '../../../Contexts/Courses/application/CourseCreator'
import { Controller } from './Controller'

export class CoursePostController implements Controller {
  constructor(private readonly courseCreator: CourseCreator) { }

  async run(req: Request, res: Response) {
    const id: string = req.params.id
    const name: string = req.body.name
    const duration: string = req.body.duration

    try {
      await this.courseCreator.run({ id, name, duration })
    } catch (error: any) {
      res.status(httpStatus.BAD_REQUEST).send(error.message)
    }

    res.status(httpStatus.CREATED).send()
  }
}
