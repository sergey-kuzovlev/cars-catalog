import { connect } from 'react-redux'
import {CarsTable} from '../components/carsTable/CarsTable'
import { VisibilityFilters } from '../actions'
import { ICar } from '../interfaces/car.interface'

const getFilteredCars = (cars: ICar[], filter: string): ICar[] => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cars
    case VisibilityFilters.SHOW_BMW:
      return cars.filter((car: ICar) => car.make === 'BMW')
    default:
      return []
  }
}

const mapStateToProps = (state: {cars: ICar[], visibilityFilter: string}): { cars: ICar[]} => ({
    cars: getFilteredCars(state.cars, state.visibilityFilter)
})

export default connect(
  mapStateToProps,
)(CarsTable)
