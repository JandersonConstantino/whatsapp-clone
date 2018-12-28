import React from 'react'
import {
  View,
  Button
} from 'react-native'
import { connect } from 'react-redux'

import Input from './Base/Input'

class FormCadastro extends React.Component {
  render() {
    let { name, email, password } = this.props
    return (
      <View style={{ flex: 1, padding: 30 }}>
        <View style={{ flex: 4 }}>
          <Input placeholder="Name" value={name}/>
          <Input placeholder="E-mail" value={email}/>
          <Input placeholder="Password" value={password}/>
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Cadastrar" onPress={() => false} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  name: state.Auth.name,
  email: state.Auth.email,
  password: state.Auth.password,
})

export default connect(mapStateToProps, null)(FormCadastro)