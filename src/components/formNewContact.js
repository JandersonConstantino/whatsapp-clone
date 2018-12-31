import React, { Component } from 'react'
import {
  View,
  Button,
  TextInput,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import {
  changeNewContactEmail,
  addNewContact,
  AddContactIsSucces,
} from '../actions/AppAction'

class FormContato extends Component {

  componentWillMount() {
    let { AddContactIsSucces, changeNewContactEmail, } = this.props

    AddContactIsSucces(false)
    changeNewContactEmail('')
  }

  render() {
    let {
      newContactEmail,
      changeNewContactEmail,
      addNewContact,
      errorMessageMewContactEmail,
      createNewContactIsSuccess,
    } = this.props

    if (createNewContactIsSuccess) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Cadastro realizado com sucesso!</Text>
        </View>
      )
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20, }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            placeholder='E-mail'
            value={newContactEmail}
            style={{ fontSize: 20, height: 45, }}
            onChangeText={value => changeNewContactEmail(value)}
          />
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            title='Adicionar'
            onPress={() => addNewContact(newContactEmail)}
          />
          {
            errorMessageMewContactEmail
              ? <Text style={{ color: 'red', fontWeight: 'bold', }} >{errorMessageMewContactEmail}</Text>
              : null
          }

        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  newContactEmail: state.App.newContactEmail,
  errorMessageMewContactEmail: state.App.errorMessageMewContactEmail,
  createNewContactIsSuccess: state.App.createNewContactIsSuccess,
})
export default connect(mapStateToProps, {
  changeNewContactEmail,
  addNewContact,
  AddContactIsSucces,
})(FormContato)