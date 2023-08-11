import { CourseId } from '../domain/CourseId'
import { CourseRepository } from '../domain/CourseRepository'
import { CourseReponse } from './CourseResponse'

export class SearchById {
  constructor(private readonly courseRepository: CourseRepository) { }

  async run(id: string): Promise<any> {
    const course = await this.courseRepository.searchById(new CourseId(id))

    if (course == null) {
      throw new Error('Course not found')
    }

    return new CourseReponse(course)
  }
}
