import { Course } from '../domain/Course'
import { CourseDuration } from '../domain/CourseDuration'
import { CourseId } from '../domain/CourseId'
import { CourseName } from '../domain/CourseName'
import { CourseRepository } from '../domain/CourseRepository'
import { CreateCourseRequest } from './CreateCourseRequest'

export class CourseCreator {
  constructor(private readonly courseRepository: CourseRepository) { }

  async run(request: CreateCourseRequest): Promise<void> {
    const course = new Course(
      new CourseId(request.id),
      new CourseDuration(request.duration),
      new CourseName(request.name)
    )
    await this.courseRepository.save(course)
  }
}
