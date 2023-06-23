export abstract class ValueObject<T extends Object> {
  private readonly _value: T

  constructor(value: T) {
    this._value = value
  }

  public value(): T {
    return this._value
  }

  public equals(object: ValueObject<T>): boolean {
    return this.value() === object.value()
  }

  toJSON() {
    return this.toString()
  }

  toString() {
    if (this._value) {
      return this._value.toString()
    }

    return this._value
  }

  valueOf() {
    return this._value
  }
}
