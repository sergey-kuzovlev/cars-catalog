import { combineReducers } from 'redux'
import cars from './cars'
import visibilityFilter from './filterCars'

export default combineReducers({
  cars,
  visibilityFilter
})
