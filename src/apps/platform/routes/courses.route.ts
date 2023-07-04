import { Express } from 'express'
import { CoursesPostController } from '../controllers/CoursesPostController'
import container from '../dependency-injection'

export const register = (app: Express) => {
  const controller: CoursesPostController = container.get('Apps.todo.controllers.CoursesPostController')
  app.post('/courses', controller.run.bind(controller))
}
