import { connect } from 'react-redux'
import { CarsTable } from '../components/carsTable/CarsTable'
import { ICar } from '../interfaces/car.interface'

const getFilteredCars = (cars: any, filter: string): ICar[] => {  
  return filter === 'all' ? cars.list : cars.list.filter((car: ICar) => car.make === filter)
}

const mapStateToProps = (state: {cars: any, visibilityFilter: string}): any=> {
  state.cars.filteredCars = getFilteredCars(state.cars, state.visibilityFilter)
  return state
}

export default connect(
  mapStateToProps,
)(CarsTable)
