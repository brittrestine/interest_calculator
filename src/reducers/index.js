import  calculate from './calculate'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  total: calculate,
  form: formReducer
})
