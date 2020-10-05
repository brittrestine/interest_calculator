const calculate = (state = 0, action) => {
  const {payload, type} = action

  switch (type) {
    case 'CALCULATING_PRINCIPAL':
      const total = !!payload && (payload.principal * (1 + (payload.rate * payload.years)))
      return total

    default:
      return state
  }
}

export default calculate
