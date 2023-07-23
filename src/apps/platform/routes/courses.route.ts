import { Express } from 'express'
import { CoursesPostController } from '../controllers/CoursesPostController'
import container from '../dependency-injection'
import { CoursesGetController } from '../controllers/CoursesGetController'

export const register = (app: Express) => {
  const coursesPostController: CoursesPostController = container.get('Apps.todo.controllers.CoursesPostController')
  const coursesGetController: CoursesGetController = container.get('Apps.todo.controllers.CoursesGetController')

  app.post('/courses', coursesPostController.run.bind(coursesPostController))
  app.get('/courses', coursesGetController.run.bind(coursesGetController))
}
