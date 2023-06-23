import { AggregateRoot } from './AgregateRoot'
import { CourseId } from './CourseId'
import { CourseName } from './CourseName'

export class Course extends AggregateRoot {
  readonly id: CourseId
  readonly duration: string
  readonly name: CourseName

  constructor(id: CourseId, duration: string, name: CourseName) {
    super()
    this.id = id
    this.duration = duration
    this.name = name
  }

  toPrimitives(): any {
    throw new Error('Method not implemented.')
  }
}
