export interface Validatable<T> {
  /**
   * Method for your validation logic
   */
  validate(data: T): boolean

  /**
   * The error message that will be sent, if the *validate* method returns *false*
   */
  errorMessage: string
}
