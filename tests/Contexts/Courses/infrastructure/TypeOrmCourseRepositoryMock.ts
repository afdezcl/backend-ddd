import { Course } from '../../../../src/Contexts/Courses/domain/Course'
import { CourseId } from '../../../../src/Contexts/Courses/domain/CourseId'
import { CourseDuration } from '../../../../src/Contexts/Courses/domain/CourseDuration'
import { CourseName } from '../../../../src/Contexts/Courses/domain/CourseName'
import { CourseRepository } from '../../../../src/Contexts/Courses/domain/CourseRepository'

export class TypeOrmCourseRepositoryMock implements CourseRepository {
  public save(course: Course): Promise<void> {
    return new Promise((resolve) => resolve())
  }

  public async searchAll(): Promise<Course[]> {
    const course = new Course(
      new CourseId('1'),
      new CourseDuration('10 minutes'),
      new CourseName('Course 1')
    )
    const courses = [course]

    return courses
  }

  public async searchById(id: CourseId): Promise<Course | null> {
    const course = new Course(
      id,
      new CourseDuration('10 minutes'),
      new CourseName('Course 1')
    )

    return course
  }
}
