import { type Knex } from 'knex'
import { Course } from '../domain/Course'
import { CourseRepository } from '../domain/CourseRepository'
import { CourseId } from '../domain/CourseId'
import { KnexDatabaseContext } from '../../Shared/infrastructure/persistence/knex/KnexDatabaseContext'

export class TypeOrmCourseRepository implements CourseRepository {
  constructor(private readonly databaseContext: KnexDatabaseContext) {}

  public async save(course: Course): Promise<void> {
    let transaction: Knex.Transaction | null = null

    transaction = await this.databaseContext.getTransaction()

    const coursePrimitives = course.toPrimitives()

    await transaction.into('courses')
      .insert({
        id: coursePrimitives.id,
        name: coursePrimitives.name,
        duration: coursePrimitives.duration
      })
    await transaction.commit()
  }

  public async searchAll(): Promise<Course[]> {
    const client = this.databaseContext.getClient()

    const courseRows = await client('courses').select('*')

    return courseRows.map((courseRow) => Course.fromPrimitives(courseRow))
  }

  public async searchById(id: CourseId): Promise<Course | null> {
    const client = this.databaseContext.getClient()

    const courseRow = await client
      .select('*')
      .from('courses')
      .where('id', id.value)
      .first()

    const course = Course.fromPrimitives(courseRow)

    return course ?? null
  }
}
