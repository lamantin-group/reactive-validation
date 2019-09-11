import { Validatable } from './Validatable'

export class ShouldIncludeRule implements Validatable<string> {
  private symbols: string

  constructor(symbols: string, error: string = 'value should containt "' + symbols + '"') {
    this.symbols = symbols
    this.errorMessage = error
  }

  errorMessage = ''

  validate(data: string): boolean {
    return data.includes(this.symbols)
  }
}
