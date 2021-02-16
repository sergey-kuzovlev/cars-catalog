import { LOAD_CARS } from "../actions/types";
import { ICar } from "../interfaces/car.interface";

const cars = (state = [], action: {type: string, cars: ICar[]}) => {
  switch (action.type) {
    case LOAD_CARS:
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