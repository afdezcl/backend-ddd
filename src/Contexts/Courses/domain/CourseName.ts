import { StringValueObject } from '../../Shared/domain/value-object/StringValueObject'

export class CourseName extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureLengthIsLessThan30Characters(value)
  }

  private ensureLengthIsLessThan30Characters(value: string): void {
    if (value.length > 30) {
      throw new Error('CourseName must be less than 30 characters')
    }
  }
}
