import { ICar } from "../interfaces/car.interface"

export const loadCars = (cars: ICar[]) => ({
  type: 'LOAD_CARS',
  cars
})

export const setVisibilityFilter = (filter: string) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BMW: 'SHOW_BMW',
}
