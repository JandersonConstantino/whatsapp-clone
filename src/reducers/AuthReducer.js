const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ON_CHANGE':
    console.log(state)
      let obj = state
      obj[action.payload.field] = action.payload.value
      return obj

    default:
      return state
  }
}