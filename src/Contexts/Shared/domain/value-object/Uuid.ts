import { v4 as uuidV4 } from 'uuid'
import validate from 'uuid-validate'

export class Uuid {
  readonly value: string

  constructor(value: string) {
    this.ensureIsValidUuid(value)

    this.value = value
  }

  static random(): Uuid {
    return new Uuid(uuidV4())
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new Error(`<${id}> does not allow the <${id}> value`)
    }
  }

  toString(): string {
    return this.value
  }
}
