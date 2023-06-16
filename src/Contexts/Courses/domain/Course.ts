export class Course {
  readonly id: string
  readonly duration: string
  readonly name: string

  constructor (id: string, duration: string, name: string) {
    this.id = id
    this.duration = duration
    this.name = name
  }
}
