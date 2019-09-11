/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component, Fragment } from 'react'
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import {
  MaxLengthRule,
  MinLengthRule,
  NotNullRule,
  ShouldNotIncludeRule,
  Validator,
} from 'react-native-library'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

function EditInput(props: {
  value: string
  placeholder: string
  error: string | null
  onChangeText: (text: string) => void
}) {
  return (
    <View>
      <TextInput
        style={{
          fontSize: 24,
          color: 'black',
        }}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      {props.error && <Text style={{ color: 'red' }}>{props.error}</Text>}
    </View>
  )
}

const loginValidator = new Validator<string>()
loginValidator.push(new NotNullRule())
loginValidator.push(new MinLengthRule(3))
loginValidator.push(new MaxLengthRule(6, 'custom error message'))
loginValidator.push({
  errorMessage: 'Should contain "a" letter, because I want',
  validate: value => value.includes('a'),
})

const passwordValidator = new Validator<string>()
passwordValidator.push(new MinLengthRule(6))
passwordValidator.push(new ShouldNotIncludeRule('word'))

interface AppState {
  login: {
    text: string
    error: string | null
  }
  password: {
    text: string
    error: string | null
  }
  buttonLoginDisabled: boolean
}
class App extends Component {
  state = {
    login: {
      text: '',
      error: null,
    },
    password: {
      text: '',
      error: null,
    },
  }

  render() {
    const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null
    const { login, password } = this.state
    const disableOnFirstStartWithoutShowingError =
      login.text.length === 0 || password.text.length === 0

    const buttonDisabled =
      disableOnFirstStartWithoutShowingError ||
      !!(this.state.login.error || this.state.password.error)

    return (
      <Fragment>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 32,
          }}>
          <EditInput
            placeholder="Enter login"
            value={login.text}
            error={login.error}
            onChangeText={text => {
              this.setState({
                login: {
                  text: text,
                  error: loginValidator.validate(text),
                },
              })
            }}
          />

          <EditInput
            placeholder="Enter password"
            value={password.text}
            error={password.error}
            onChangeText={text => {
              this.setState({
                password: {
                  text: text,
                  error: passwordValidator.validate(text),
                },
              })
            }}
          />

          <Button
            title="Login"
            disabled={buttonDisabled}
            onPress={() => {
              Alert.alert('Hello')
            }}
          />
        </View>
      </Fragment>
    )
  }
}

export default App
