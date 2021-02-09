import { IAction, ICar } from "../interfaces/car.interface"

const cars = (state = [], action: any) => {
  switch (action.type) {
    case 'LOAD_CARS':
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