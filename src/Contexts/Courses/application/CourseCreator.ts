import { Course } from '../domain/Course'
import { CourseName } from '../domain/CourseName'
import { CourseRepository } from '../domain/CourseRepository'

export class CourseCreator {
  constructor(private readonly courseRepository: CourseRepository) { }

  async run(id: string, duration: string, name: CourseName) {
    const course = new Course(id, duration, name)

    await this.courseRepository.save(course)
  }
}
