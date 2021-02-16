import { SET_VISIBILITY_FILTER } from '../actions/types'
import { IAction } from '../interfaces/car.interface'

interface IActionFilter extends IAction { 
  filter: string
}

const visibilityFilter = (state = 'all', action: IActionFilter) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
