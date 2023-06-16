import { Course } from '../domain/Course'
import { CourseRepository } from '../domain/CourseRepository'

export class CourseCreator {
  constructor (private readonly courseRepository: CourseRepository) { }

  async run (id: string, duration: string, name: string) {
    const course = new Course(id, duration, name)

    await this.courseRepository.save(course)
  }
}
