import { AggregateRoot } from './AgregateRoot'
import { CourseName } from './CourseName'

export class Course extends AggregateRoot {
  readonly id: string
  readonly duration: string
  readonly name: CourseName

  constructor(id: string, duration: string, name: CourseName) {
    super()
    this.id = id
    this.duration = duration
    this.name = name
  }

  toPrimitives(): any {
    throw new Error('Method not implemented.')
  }
}
