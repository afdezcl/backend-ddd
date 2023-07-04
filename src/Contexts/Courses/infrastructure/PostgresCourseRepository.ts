import { Course } from '../domain/Course'
import { CourseRepository } from '../domain/CourseRepository'

export class PostgresCourseRepository implements CourseRepository {
  public save(course: Course): Promise<void> {
    throw new Error('Method not implemented')
  }
}
