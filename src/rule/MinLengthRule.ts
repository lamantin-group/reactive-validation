import { Validatable } from '../Validatable'

export class MinLengthRule implements Validatable<string | null | undefined> {
  private minLength: number

  constructor(minLength: number, error: string = 'value should be bigger than ' + minLength) {
    this.minLength = minLength
    this.errorMessage = error
  }

  errorMessage = ''

  validate(data: string | null | undefined): boolean {
    return (data || '').length >= this.minLength
  }
}
