import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  Platform,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import { Actions, } from 'react-native-router-flux'
import { connect, } from 'react-redux'

import Input from './Base/Input'

import {
  onChange,
  signInUser,
} from '../actions/AuthAction'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ? 30 : 10,
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerContent: {
    flex: 2,
  },
  containerBottom: {
    flex: 2,
  },
  styleTitle: {
    fontSize: 25,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  textCadastre: {
    fontSize: 20,
    color: '#fff',
  },
  styleButton: {
    color: '#115E54',
  }
})

class Formlogin extends React.Component {

  _handleChange(value, field) {
    this.props.onChange(value, field)
  }

  _renderBtnAccess() {
    let { email, password, signInUser, loadingSignIn } = this.props

    return (
      loadingSignIn ? <ActivityIndicator size='large' />
        : <Button style={styles.styleButton} title="Acessar" onPress={() => signInUser({email, password})} />
    )
  }

  render() {
    let { email, password, errorMessageSignIn, } = this.props
    return (
      <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.styleTitle}>WhatsApp Clone</Text>
          </View>
          <View style={styles.containerContent}>
            <Input placeholder='E-mail' value={email} onChangeText={value => this._handleChange(value, 'email')} />
            <Input secureTextEntry placeholder='Senha' value={password} onChangeText={value => this._handleChange(value, 'password')} />
            <TouchableHighlight onPress={() => Actions.cadastro()}>
              <Text style={styles.textCadastre}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.containerBottom}>
            { this._renderBtnAccess() }
            <Text style={{color: 'red', fontWeight: 'bold', backgroundColor: errorMessageSignIn ? 'white' : 'transparent'}}>
              {errorMessageSignIn}
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => (
  {
    email: state.Auth.email,
    password: state.Auth.password,
    errorMessageSignIn: state.Auth.errorMessageSignIn,
    loadingSignIn: state.Auth.loadingSignIn,
  }
)
export default connect(mapStateToProps, {
  onChange,
  signInUser,
})(Formlogin)