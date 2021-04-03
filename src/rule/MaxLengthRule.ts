import { Validatable } from '../Validatable'

export class MaxLengthRule implements Validatable<string | undefined | null> {
  private maxLength: number

  constructor(maxLength: number, error: string = 'value should be lower than ' + maxLength) {
    this.maxLength = maxLength
    this.errorMessage = error
  }

  errorMessage = ''

  validate(data: string | undefined | null): boolean {
    return (data || '').length < this.maxLength
  }
}
