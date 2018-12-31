import {
  combineReducers
} from 'redux'

import AuthReducer from './AuthReducer'
import AppReducer from './AppReducer'
import ContactReducer from './ContactReducer'

export default combineReducers({
  Auth: AuthReducer,
  App: AppReducer,
  Contact: ContactReducer,
})