import { EntitySchema } from 'typeorm'
import { TypeOrmRepository } from '../../Shared/infrastructure/persistence/typeorm/TypeOrmRepository'
import { Course } from '../domain/Course'
import { CourseRepository } from '../domain/CourseRepository'
import { CourseEntity } from './persistence/CourseEntity'

export class TypeOrmCourseRepository extends TypeOrmRepository<Course> implements CourseRepository {
  public save(course: Course): Promise<void> {
    return this.persist(course)
  }

  protected entitySchema(): EntitySchema<Course> {
    return CourseEntity
  }

  public async searchAll(): Promise<Course[]> {
    const repository = await this.repository()

    const courses = await repository.find()

    return courses
  }
}
