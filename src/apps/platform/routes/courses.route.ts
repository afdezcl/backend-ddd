import { Express } from 'express'
import { CoursesPostController } from '../controllers/CoursesPostController'
import container from '../dependency-injection'
import { CoursesGetController } from '../controllers/CoursesGetController'
import { CoursesGetByIdController } from '../controllers/CoursesGetByIdController'

export const register = (app: Express) => {
  const coursesPostController: CoursesPostController = container.get('Apps.todo.controllers.CoursesPostController')
  const coursesGetController: CoursesGetController = container.get('Apps.todo.controllers.CoursesGetController')
  const courseGetByIdController: CoursesGetByIdController = container.get('Apps.todo.controllers.CoursesGetByIdController')

  app.post('/courses', coursesPostController.run.bind(coursesPostController))
  app.get('/courses/:id', courseGetByIdController.run.bind(courseGetByIdController))
  app.get('/courses', coursesGetController.run.bind(coursesGetController))
}
