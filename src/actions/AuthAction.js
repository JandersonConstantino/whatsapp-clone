

export const onChange = (value, field) => {
  return {
    type: 'ON_CHANGE',
    payload: {
      field: field,
      value: value
    }
  }
}