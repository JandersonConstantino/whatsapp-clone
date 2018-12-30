import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    height: 45,
    color: '#ffffff',
  },
})

export default class Input extends Component {

  _handleOnChangeText(e) {
    let { onChangeText, } = this.props

    if(onChangeText)
      onChangeText(e)
  }

  render() {
    let { placeholder, value, } = this.props
    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={e => this._handleOnChangeText(e)}
        style={styles.textInput}
        secureTextEntry={this.props.secureTextEntry || false}
        placeholderTextColor='#ffffff'
      />
    )
  }
}
