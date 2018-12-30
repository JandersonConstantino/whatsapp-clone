import { Actions } from "react-native-router-flux";

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ON_CHANGE':
      let obj = Object.assign({}, state)
      obj[action.payload.field] = action.payload.value
      return obj

    case 'AUTH_NOT_CREATED_USER':
      return {
        ...state,
        errorMessage: action.payload
      }

    case 'AUTH_CREATED_USER':
      return {
        ...state,
        name: '',
        password: '',
      }

    
      
    default:
      return state
  }
}