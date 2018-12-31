import * as types from '../constants/meetConstants'

const INITIAL_STATE = {
  meetMessage: '',
  listMeet: '',
  listMeetHeader: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.CHANGE_MEET_MESSAGE:
      return { ...state, meetMessage: action.payload }

    case types.LIST_MEET_USER:
      return { ...state, listMeet: action.payload }
    case types.MEET_LIST_HEADER:
      return { ...state, listMeetHeader: action.payload }
    default:
      return state
  }
}