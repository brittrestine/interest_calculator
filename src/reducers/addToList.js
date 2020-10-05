const calculate = (state = 0, action) => {
  const {principal, rate, type, years} = action

  switch (type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    default:
      return state
  }
}

export default calculate
