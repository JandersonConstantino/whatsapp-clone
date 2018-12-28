import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from 'react-native'
import { Actions, } from 'react-native-router-flux'
import { connect, } from 'react-redux'

import Input from './Base/Input'

import {
  onChange
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
  },
  textCadastre: {
    fontSize: 20,
  },
  styleButton: {
    color: '#115E54',
  }
})

class Formlogin extends React.Component {

  _handleChange(value, field) {
    this.props.onChange(value, field)
  }

  render() {
    let { email, password, } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.styleTitle}>WhatsApp Clone</Text>
        </View>
        <View style={styles.containerContent}>
          <Input placeholder='E-mail' value={email} onChangeText={value => this._handleChange(value, 'email')} />
          <Input placeholder='Senha' value={password} onChangeText={value => this._handleChange(value, 'password')} />
          <TouchableHighlight onPress={() => Actions.cadastro()}>
            <Text style={styles.textCadastre}>Ainda não tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.containerBottom}>
          <Button style={styles.styleButton} title="Acessar" onPress={() => false} />
        </View>
      </View>
    )
  }
} 

const mapStateToProps = state => (
  {
    email: state.Auth.email,
    password: state.Auth.password
  }
)
export default connect(mapStateToProps, {
  onChange,
})(Formlogin)