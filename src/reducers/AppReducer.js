import * as types from '../constants/appConstants'

const INITIAL_STATE = {
  newContactEmail: '',
  errorMessageMewContactEmail: '',
  createNewContactIsSuccess: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.CHANGE_NEW_CONTACT_EMAIL:
      return { ...state, newContactEmail: action.payload, errorMessageMewContactEmail: '' }

    case types.ADD_NEW_CONTACT_ERROR:
      return { ...state, errorMessageMewContactEmail: action.payload }

    case types.ADD_CONTACT_IS_SUCCESS:
      return { ...state, createNewContactIsSuccess: action.payload }
    default:
      return state
  }
}