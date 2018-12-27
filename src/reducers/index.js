import {
  combineReducers
} from 'redux'

import AutenticacaoReducer from './AutenticacaoReducer'

export default combineReducers({
  Autenticacao: AutenticacaoReducer,
  
})