import { Course } from '../domain/Course'

interface CourseResponse {
  id: string
  name: string
  duration: string
}

export class CourseReponse {
  public readonly course: CourseResponse

  constructor(course: Course) {
    this.course = course.toPrimitives()
  }
}
