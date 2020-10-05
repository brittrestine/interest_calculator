// const nextId = 0
//
// export const addToList = text => ({
//   type: 'ADD_TO_LIST',
//   id: nextId++,
//   text
// })

export const calculate = (principal, rate, years) => ({
  type: 'CALCULATING_PRINCIPAL',
  payload: {principal, rate, years}
})
