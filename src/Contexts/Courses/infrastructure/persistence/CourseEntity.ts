import { EntitySchema } from 'typeorm'
import { Course } from '../../domain/Course'
import { CourseId } from '../../domain/CourseId'
import { CourseName } from '../../domain/CourseName'
import { CourseDuration } from '../../domain/CourseDuration'
import { ValueObjectTransformer } from '../../../Shared/infrastructure/persistence/typeorm/ValueObjectTransformer'

export const CourseEntity = new EntitySchema<Course>({
  name: 'Course',
  tableName: 'courses',
  target: Course,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: ValueObjectTransformer(CourseId)
    },
    name: {
      type: String,
      transformer: ValueObjectTransformer(CourseName)
    },
    duration: {
      type: String,
      transformer: ValueObjectTransformer(CourseDuration)
    }
  }
})
