import React from 'react'
import {
  View,
  TextInput,
  Button
} from 'react-native'

export default class FormCadastro extends React.Component {
  render() {
    return (
      <View style={{flex: 1, padding: 30 }}>
        <View style={{ flex: 4 }}>
          <TextInput placeholder="Nome" />
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Senha" />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Cadastrar" onPress={() => false} />
        </View>
      </View>
    )
  }
}