import { actionTypes } from "../actions/types";
import { ICar, ICarTableState } from "../components/car/types";

const cars = (state = {}, action: {type: actionTypes, cars: ICar[]}): ICarTableState | object => {
  switch (action.type) {
    case actionTypes.LOAD_CARS:
      const makes = action.cars.map((car: ICar) => (car.make))
      
      return {
        list: action.cars,
        makes: Array.from(new Set(makes)),
        filteredCars: action.cars
      }
    default:
      return state
  }
}

export default cars