import { SearchById } from '../../../../src/Contexts/Courses/application/SearchById'
import { TypeOrmCourseRepositoryMock } from '../infrastructure/TypeOrmCourseRepositoryMock'

describe('SearchById', () => {
  it('should search a course by id', async () => {
    const courseRepository = new TypeOrmCourseRepositoryMock()
    const searchById = new SearchById(courseRepository)

    const course = await searchById.run('f1689b4e-cf92-40b8-93b0-19788468c80e')

    expect(course).toEqual({
      course: {
        id: 'f1689b4e-cf92-40b8-93b0-19788468c80e',
        duration: '10 minutes',
        name: 'Course 1'
      }
    })
  })
})
