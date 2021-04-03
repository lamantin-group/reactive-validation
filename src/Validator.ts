import { Validatable } from './Validatable'

export class Validator<T> {
  /**
   * Validate your input by rules
   * @param data input for validator
   * @returns null if error not exist, or error message
   */
  validate(data: T): string | null {
    for (const rule of this.rules) {
      if (!rule.validate(data)) {
        const message = rule.errorMessage
        return message
      }
    }

    return null
  }

  push(rule: Validatable<T>) {
    this.rules.push(rule)
  }

  constructor(private rules: Validatable<T>[] = []) {}
}
