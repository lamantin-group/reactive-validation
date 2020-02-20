import { Validator } from '../src/Validator'
import { RegExpRule } from '../src/rule/RegExpRule'
import chai from 'chai'

describe(`regexp rule`, () => {
  it('should return error message', () => {
    const errorMessage = 'some random error text'
    const validator = new Validator()
    validator.push(new RegExpRule(/[0-9]/, errorMessage))

    const result = validator.validate('string')
    chai.assert.equal(result, errorMessage)
  })
})
