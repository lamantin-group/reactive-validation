import { Validatable } from './Validatable'

export class Validator<T> extends Array<Validatable<T>> {
  /**
   * Validate your input by rules
   * @param data input for validator
   * @returns null if error not exist, or error message
   */
  validate(data: T): string | null {
    for (const rule of this) {
      if (!rule.validate(data)) {
        const message = rule.errorMessage
        return message
      }
    }

    return null
  }
}
