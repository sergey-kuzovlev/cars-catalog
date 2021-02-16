import { ICar } from "../interfaces/car.interface";
import { LOAD_CARS, SET_VISIBILITY_FILTER } from "./types";

export const loadCars = (cars: ICar[]) => ({
  type: LOAD_CARS,
  cars
})

export const setVisibilityFilter = (filter: string) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
