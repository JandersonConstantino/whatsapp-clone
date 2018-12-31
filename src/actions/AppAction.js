import firebase from 'firebase'
import b64 from 'base-64'
import _ from 'lodash'

import * as types from '../constants/appConstants'

export const changeNewContactEmail = value => {
  return {
    type: types.CHANGE_NEW_CONTACT_EMAIL,
    payload: value
  }
}

export const addNewContact = email => {
  return dispatch => {
    firebase.database().ref(`/contacts/${b64.encode(email)}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          let { currentUser } = firebase.auth()
          let dataNewContact = _.first(_.values(snapshot.val()))

          firebase.database().ref(`/userContacts/${b64.encode(currentUser.email)}`)
            .push({ email, name: dataNewContact.name })
            .then(() => {
              dispatch(AddContactIsSucces(true))
              dispatch({ type: types.ADD_NEW_CONTACT, payload: null })
            })
            .catch(() => {
              dispatch(AddContactIsSucces(false))

              dispatch({
                type: types.ADD_NEW_CONTACT_ERROR,
                payload: 'Ocorreu um erro ao adicionar o contato. Tente novamente'
              })
            })
        } else {
          dispatch({
            type: types.ADD_NEW_CONTACT_ERROR,
            payload: 'E-mail digitado não foi encontrado na nossa base de dados!'
          })
        }
      })
  }
}

export const AddContactIsSucces = value => {
  return {
    type: types.ADD_CONTACT_IS_SUCCESS,
    payload: value
  }
}

export const listContactsFetch = () => {

  return dispatch => {
    let { currentUser } = firebase.auth()

    firebase.database().ref(`/userContacts/${b64.encode(currentUser.email)}`)
      .on('value', snapshot => {

        let value = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid }
        })

        dispatch({
          type: 'LIST_CONTACTS_FETCH',
          payload: value
        })
      })
  }
}