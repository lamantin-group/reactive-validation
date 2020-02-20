import { Validatable } from '../Validatable'

export class NotNullRule<T = any> implements Validatable<T> {
  errorMessage = 'value is null'

  constructor(error = 'value is null') {
    this.errorMessage = error
  }

  validate(data?: T): boolean {
    return data !== null
  }
}
