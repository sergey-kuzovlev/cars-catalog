import { combineReducers } from 'redux'
import cars from './cars'
import visibilityFilter from './filterCars'
import auth from './auth'

export default combineReducers({
  auth,
  cars,
  visibilityFilter,
})
