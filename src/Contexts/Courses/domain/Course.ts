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
    return {
      id: this.id.value,
      duration: this.duration.value,
      name: this.name.value
    }
  }

  public static fromPrimitives({
    id,
    duration,
    name
  }: {
    id: string
    duration: string
    name: string
  }): Course {
    return new Course(
      new CourseId(id),
      new CourseDuration(duration),
      new CourseName(name)
    )
  }
}
