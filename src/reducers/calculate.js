const calculate = (state = 0, action) => {
  const {payload, type} = action
  const rateToUse = !!payload && parseFloat(payload.rate) / 100.0

  switch (type) {
    case 'CALCULATING_PRINCIPAL':
      const total = !!payload && (payload.principal * (1 + rateToUse * payload.years))
      return total

    default:
      return state
  }
}

export default calculate
