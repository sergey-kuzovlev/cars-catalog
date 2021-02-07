import { connect } from 'react-redux'
import {CarsTable} from '../components/carsTable/CarsTable'
import { VisibilityFilters } from '../actions'
import { ICar } from '../interfaces/car.interface'

const getFilteredCars = (cars: ICar[], filter: any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cars
    case VisibilityFilters.SHOW_BMW:
      return cars.filter((t) => t.make === 'BMW')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: any): any => {
  return {
    cars: getFilteredCars(state.cars, state.visibilityFilter)
  }
}

export default connect(
  mapStateToProps,
)(CarsTable)
