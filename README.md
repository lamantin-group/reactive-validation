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

```js
const loginValidator = new Validator<string>() // create validator
loginValidator.push(new MinLengthRule(3)) // add some rules by your taste
loginValidator.push(new MaxLengthRule(6, 'custom error message')) // pass custom error message
loginValidator.push({ // or create your own like this
  errorMessage: 'Should contain "a" letter, because I want',
  validate: value => value.includes('a'),
})

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