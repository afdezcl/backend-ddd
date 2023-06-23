import { Express } from 'express'
import { CoursePostController } from '../controllers/CoursePostController'
import container from '../dependency-injection'

export const register = (app: Express) => {
  const controller: CoursePostController = container.get('Apps.todo.controllers.CoursePostController')
  app.post('/courses', controller.run.bind(controller))
}
