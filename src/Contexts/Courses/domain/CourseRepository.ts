import { Course } from './Course'
import { CourseId } from './CourseId'

export interface CourseRepository {
  save: (course: Course) => Promise<void>
  searchAll: () => Promise<Course[]>
  searchById: (id: CourseId) => Promise<Course | null>
}
