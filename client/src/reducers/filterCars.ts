import { actionTypes } from '../actions/types'
import { IActionFilter } from '../components/car/types';

const visibilityFilter = (state = 'all', action: IActionFilter): string => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
