import  addToList from './addToList'
import  calculate from './calculate'
import { combineReducers } from 'redux'

export default combineReducers({
  total: calculate,
  // addToList
})
