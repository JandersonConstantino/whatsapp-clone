import * as types from '../constants/authConstants'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorMessage: '',
  errorMessageSignIn: '',
  loadingSignIn: false,
  loadingSignUp: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ON_CHANGE:
      let obj = Object.assign({}, state)
      obj[action.payload.field] = action.payload.value
      return obj

    case types.AUTH_NOT_CREATED_USER:
      return {
        ...state,
        errorMessage: action.payload
      }

    case types.AUTH_CREATED_USER:
      return {
        ...state,
        name: '',
        password: '',
      }

    case types.AUTH_USER_ERROR:
      return {
        ...state,
        errorMessageSignIn: action.payload
      }

      case types.AUTH_USER_SUCCESS:
      return { ...state, errorMessageSignIn: '' }

      case types.CHANGE_SIGNIN_LOADING:
        return { ...state, loadingSignIn: action.payload }

      case types.CHANGE_SIGNUP_LOADING:
        return { ...state, loadingSignUp: action.payload }
      
    default:
      return state
  }
}