import firebase from 'firebase'
import { Actions, } from 'react-native-router-flux'

import b64 from 'base-64'

export const onChange = (value, field) => {
  return {
    type: 'ON_CHANGE',
    payload: {
      field: field,
      value: value
    }
  }
}

export const registerUser = ({ name, email, password }) => {
  return dispath => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(success => {
        firebase.database().ref(`/contacts/${b64.encode(email)}`)
        .push({ name })
        .then(() => {
          createUserSuccess(success, dispath)
        })
        .catch(error => createUserError(error, dispath))

      })
      .catch(error => createUserError(error, dispath))
  }
}

const createUserSuccess = (data, dispath) => {
  dispath({
    type: 'AUTH_CREATED_USER',
    payload: data
  })

  Actions.boasVindas()
}

const createUserError = (error, dispath) => {
  let messageError = ''

  switch(error.code) {
    case 'auth/email-already-in-use':
        messageError = 'E-mail já está em uso!'
      break

    case 'auth/invalid-email':
        messageError = 'E-mail inválido!'
      break
    
    case 'auth/operation-not-allowed':
        messageError = 'Opção de cadastro por e-mail e senha está desabilitado no banco de dados!'
      break

    case 'auth/weak-password':
        messageError = 'Senha informada não preenche os requisitos mínimos de segurança: 6 dígitos!'
      break
    
    default:
        messageError = error.message
      break
  }

  dispath({
    type: 'AUTH_NOT_CREATED_USER',
    payload: messageError
  })
}