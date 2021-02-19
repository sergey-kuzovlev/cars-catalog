import { ICar } from "../components/car/types";
import { actionTypes } from "./types";

export const loadCars = (cars: ICar[]): { type: actionTypes, cars: ICar[] } => ({
  type: actionTypes.LOAD_CARS,
  cars
})

export const setVisibilityFilter = (filter: string): { type: actionTypes, filter: string } => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
})
