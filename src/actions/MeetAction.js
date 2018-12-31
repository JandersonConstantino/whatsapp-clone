import firebase from 'firebase'
import b64 from 'base-64'
import _ from 'lodash'

import * as types from '../constants/meetConstants'


export const changeMessage = value => {
  return {
    type: types.CHANGE_MEET_MESSAGE,
    payload: value
  }
}

export const sendMessage = ({ message, name, email }) => {
  return dispatch => {
    const { currentUser } = firebase.auth()
    const userEmailB64 = b64.encode(currentUser.email)
    const contactEmailB64 = b64.encode(email)

    firebase.database().ref(`/messages/${userEmailB64}/${contactEmailB64}`)
      .push({ message: message, type: 's' })
      .then(() => {

        firebase.database().ref(`/messages/${contactEmailB64}/${userEmailB64}`)
          .push({ message, type: 'r' })
          .then(() => {
            dispatch({
              type: types.SEND_MESSAGE
            })
            dispatch({
              type: types.CHANGE_MEET_MESSAGE,
              payload: ''
            })
          })
          .then(() => {
            firebase.database().ref(`userMeets/${userEmailB64}/${contactEmailB64}`)
              .set({ name, email })
          })
          .then(() => {

            firebase.database().ref(`contacts/${userEmailB64}`)
              .once('value', snapshot => {
                let contact =  _.first(_.values(snapshot.val()))
                firebase.database().ref(`userMeets/${contactEmailB64}/${userEmailB64}`)
                  .set({name: contact.name, email: currentUser.email})
              })
          })
      })
  }
}

export const meetUserFetch = contactEmail => {
  return dispatch => {
    
    const { currentUser } = firebase.auth()

    firebase.database().ref(`/messages/${b64.encode(currentUser.email)}/${b64.encode(contactEmail)}`)
      .on('value', snapshot => {
        let query = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid }
        })

        dispatch({
          type: types.LIST_MEET_USER,
          payload: query
        })
      })
  }
}

export const getMyMeetsHeader = () => {
  return dispatch => {
    let { currentUser } = firebase.auth()

    firebase.database().ref(`userMeets/${b64.encode(currentUser.email)}`)
      .on('value', snapshot => {
        let query = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid }
        })

        dispatch({
          type: types.MEET_LIST_HEADER,
          payload: query
        })
      })
  }
}