import firebase from 'firebase'
import { Actions, } from 'react-native-router-flux'
import b64 from 'base-64'

import * as types from '../constants/authConstants'

export const onChange = (value, field) => {
  return {
    type: types.ON_CHANGE,
    payload: {
      field: field,
      value: value
    }
  }
}

export const signUpUser = ({ name, email, password }) => {
  return dispath => {
    dispath({
      type: types.CHANGE_SIGNUP_LOADING,
      payload: true
    })

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
      .then(() => {
        dispath({
          type: types.CHANGE_SIGNUP_LOADING,
          payload: false
        })
      })
  }
}

export const signInUser = ({ email, password }) => {
  return dispath => {
    dispath({
      type: types.CHANGE_SIGNIN_LOADING,
      payload: true
    })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => {
        dispath({
          type: types.AUTH_USER_SUCCESS
        })

        dispath({
          type: types.ON_CHANGE,
          payload: {
            field: 'email',
            value: ''
          }
        })

        dispath({
          type: types.ON_CHANGE,
          payload: {
            field: 'password',
            value: ''
          }
        })

        Actions.main()
      })
      .catch(error => {
        dispath({
          type: types.AUTH_USER_ERROR,
          payload: error.message
        })
      })
      .then(() => {
        dispath({
          type: types.CHANGE_SIGNIN_LOADING,
          payload: false
        })
      })
  }
}

const createUserSuccess = (data, dispath) => {
  dispath({
    type: types.AUTH_CREATED_USER,
    payload: data
  })

  Actions.boasVindas()
}

const createUserError = (error, dispath) => {
  dispath({
    type: types.AUTH_NOT_CREATED_USER,
    payload: error.message
  })
}