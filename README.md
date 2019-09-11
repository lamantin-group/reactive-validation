reactive-validation
===================

Simple ever validation logic for your apps

![v1](.github/v1.gif)

Install
=======
```bash
yarn add reactive-validation
```

or

```bash
npm install reactive-validation --save
```

Usage
=====

### Problem
In our application we have some fields that must be validated. 
When the number of validation rules becomes greater than 1, to control the display of errors in the fields becomes difficult.

### Solve
Separate your validation logic by S in SOLID, into own classes. 
After that, attach validaton rules to your fields and combine validation results for change some ui states (ex. change visibility of button)

Firstly, you need create `Validatable` rule
```ts
const shouldContainValidator: Validatable<string> = {
  errorMessage: 'Should contain "a" letter, because I want',
  validate: (value: string) => value.includes('a'),
}
```

or choose some from predefined set
```js
import {
  NotNullRule,
  MaxLengthRule,
  MinLengthRule,
  ShouldNotIncludeRule,
} from 'react-native-library'
```

After that attach your rules to validator
```js
const loginValidator = new Validator<string>() // create validator
loginValidator.push(new NotNullRule()) // add some rules by your taste
loginValidator.push(new MaxLengthRule(6, 'custom error message')) // pass custom error message
loginValidator.push({ // or create your own
  errorMessage: 'Should contain "a" letter, because I want',
  validate: (value: string) => value.includes('a'),
})
```

After that, put it together with View
```js
state = {
  text: '',
  error: null, // string | null | undefined
}

render() {
  const { text, error } = this.state

  // write some logic for validate button
  // checking string length by 0 can disabled your button on first setup without showing error 
  const buttonDisabled = text.length === 0 || error

  return <View>
    <EditInput
      placeholder="Enter login"
      value={text}
      error={error}
      onChangeText={text => {
        this.setState({
          text: text,
          error: loginValidator.validate(text), // validate your fields here
        })
      }}
    />

    <Button 
      title="Login"
      disabled={buttonDisabled}
    />
  <View>
}
```

Thats all.

Benefits
--------
* You can use it in model layer, for consistent architecture rules
* You can use it in any input text view, because it is not attached to something
* You have typings without using not-contracted magic of other libraries
* You feel free to modify your rules how you want without overhead
* You need test only your custom validation rules, because the main features of the library are already covered by tests
* Class Validator extends from Array<Validatable>, that you can use all benefits of this collection implementation
