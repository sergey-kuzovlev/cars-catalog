import { IAction, ICar } from "../interfaces/car.interface"

interface IActionCars extends IAction { 
  cars: ICar[]
}

const cars = (state = [], action: IActionCars) => {
  switch (action.type) {
    case 'LOAD_CARS':
      return [
        ...action.cars
      ]

    default:
      return state
  }
}

export default cars