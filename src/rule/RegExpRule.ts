import { Validatable } from '../Validatable'

export class RegExpRule implements Validatable<string> {
  private regex: RegExp

  errorMessage: string

  constructor(regex: RegExp, error = 'not matched to ' + regex) {
    this.regex = regex
    this.errorMessage = error
  }

  validate(data: string): boolean {
    return this.regex.test(data)
  }
}
