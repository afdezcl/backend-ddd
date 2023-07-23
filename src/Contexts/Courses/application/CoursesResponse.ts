import { Course } from '../domain/Course'

interface CourseResponse {
  id: string
  name: string
  duration: string
}

export class CoursesReponse {
  public readonly courses: CourseResponse[]

  constructor(courses: Course[]) {
    this.courses = courses.map((course) => course.toPrimitives())
  }
}
