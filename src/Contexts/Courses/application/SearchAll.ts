import { CourseRepository } from '../domain/CourseRepository'
import { CoursesReponse } from './CoursesResponse'

export class SearchAll {
  constructor(private readonly courseRepository: CourseRepository) { }

  async run(): Promise<CoursesReponse> {
    const courses = await this.courseRepository.searchAll()

    return new CoursesReponse(courses)
  }
}
