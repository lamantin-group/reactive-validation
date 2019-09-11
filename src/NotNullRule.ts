import { Validatable } from './Validatable'

export class NotNullRule implements Validatable<any> {
  errorMessage = 'value is null'

  constructor(error = 'value is null') {
    this.errorMessage = error
  }

  validate(data?: any): boolean {
    return data !== null
  }
}
