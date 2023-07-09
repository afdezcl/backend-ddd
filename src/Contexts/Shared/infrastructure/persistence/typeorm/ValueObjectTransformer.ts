export const ValueObjectTransformer = <T>(ValueObject: any) => {
  return {
    to: (value: any): T => value.value,
    from: (value: T): any => new ValueObject(value)
  }
}
