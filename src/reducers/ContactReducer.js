import * as types from '../constants/contactConstants'

const INITIAL_STATE = {
  listContacts: [],
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case types.LIST_CONTACTS_FETCH:
      return { ...state, listContacts: action.payload }

    default:
      return state
  }
}