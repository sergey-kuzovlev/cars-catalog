import { VisibilityFilters } from '../actions'
import { IAction } from '../interfaces/car.interface'

interface IActionFilter extends IAction { 
  filter: string
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: IActionFilter) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
