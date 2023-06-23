import { AggregateRoot } from './AgregateRoot'
import { CourseDuration } from './CourseDuration'
import { CourseId } from './CourseId'
import { CourseName } from './CourseName'

export class Course extends AggregateRoot {
  readonly id: CourseId
  readonly duration: CourseDuration
  readonly name: CourseName

  constructor(id: CourseId, duration: CourseDuration, name: CourseName) {
    super()
    this.id = id
    this.duration = duration
    this.name = name
  }

  toPrimitives(): any {
    throw new Error('Method not implemented.')
  }
}
