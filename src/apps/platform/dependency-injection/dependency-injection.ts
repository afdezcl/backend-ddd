import { asClass, createContainer } from 'awilix'

import StatusGetController from '../controllers/StatusGetController'
import { CoursesGetController } from '../controllers/CoursesGetController'
import { CoursesGetByIdController } from '../controllers/CoursesGetByIdController'
import { CoursesPostController } from '../controllers/CoursesPostController'

import { CourseCreator } from '../../../Contexts/Courses/application/CourseCreator'
import { SearchAll } from '../../../Contexts/Courses/application/SearchAll'
import { SearchById } from '../../../Contexts/Courses/application/SearchById'

import { TypeOrmCourseRepository } from '../../../Contexts/Courses/infrastructure/TypeOrmCourseRepository'
import { KnexDatabaseContext } from '../../../Contexts/Shared/infrastructure/persistence/knex/KnexDatabaseContext'

const controllers = {
  statusGetController: asClass(StatusGetController),
  coursesGetByIdController: asClass(CoursesGetByIdController),
  coursesGetController: asClass(CoursesGetController),
  coursesPostController: asClass(CoursesPostController)
}

const application = {
  courseCreator: asClass(CourseCreator),
  searchAll: asClass(SearchAll),
  searchById: asClass(SearchById)
}

const infrastructure = {
  courseRepository: asClass(TypeOrmCourseRepository),
  databaseContext: asClass(KnexDatabaseContext, { lifetime: 'SINGLETON' })
}

export const container = createContainer({ injectionMode: 'CLASSIC', strict: true })

container.register({ ...controllers, ...application, ...infrastructure })

export type ControllerName = keyof typeof controllers
