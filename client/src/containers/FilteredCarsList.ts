import { connect } from 'react-redux';
import { CarsTable } from '../components/car/CarsTable';
import { ICar } from '../components/car/types';

interface IFiltersCarsState {
  cars: IStateCars
  visibilityFilter: string
}

interface IStateCars {
  filteredCars: ICar[],
  list: ICar[],
  makes: string[]
}

const getFilteredCars = (cars: IStateCars, filter: string): ICar[] => {  
  return filter === 'all' ? cars.list : cars.list.filter((car: ICar) => car.make === filter)
}

const mapStateToProps = (state: IFiltersCarsState): IFiltersCarsState=> {
  return {
    ...state,
    cars: {
      ...state.cars,
      filteredCars: getFilteredCars(state.cars, state.visibilityFilter)
    }
  }
}

export default connect(
  mapStateToProps,
)(CarsTable)
