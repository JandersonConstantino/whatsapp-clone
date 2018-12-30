import React from 'react'
import {
  View,
  Button,
  ImageBackground,
  Text,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'

import Input from './Base/Input'
import {
  onChange,
  signUpUser,
} from '../actions/AuthAction'

class FormCadastro extends React.Component {
  constructor(props) {
    super(props)
  }

  _handleRegisterButton() {
    let { signUpUser, name, email, password } = this.props

    signUpUser({
      name,
      email,
      password
    })
  }

  _renderButtonSignUp() {
    let { loadingSignUp, } = this.props

    return (
      loadingSignUp ? <ActivityIndicator size='large' />
      : <Button title="Cadastrar" onPress={() => this._handleRegisterButton()} />
    )
  }

  render() {
    let { name, email, password, onChange, errorMessage } = this.props
    return (
      <ImageBackground source={require('../../assets/bg.png')} style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 30 }}>
          <View style={{ flex: 4 }}>
            <Input placeholder="Name" value={name} onChangeText={value => onChange(value, 'name')} />
            <Input placeholder="E-mail" value={email} onChangeText={value => onChange(value, 'email')} />
            <Input secureTextEntry placeholder="Password" value={password} onChangeText={value => onChange(value, 'password')} />
            <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', backgroundColor: errorMessage ? '#fff' : 'transparent' }}>
              {errorMessage}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            { this._renderButtonSignUp() }
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => ({
  name: state.Auth.name,
  email: state.Auth.email,
  password: state.Auth.password,
  errorMessage: state.Auth.errorMessage,
  loadingSignUp: state.Auth.loadingSignUp
})

export default connect(mapStateToProps, {
  onChange,
  signUpUser,
})(FormCadastro)