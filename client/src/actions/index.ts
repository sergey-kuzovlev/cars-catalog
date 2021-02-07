export const loadCars = (cars: any) => ({
  type: 'LOAD_CARS',
  cars
})

export const setVisibilityFilter = (filter: any) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BMW: 'SHOW_BMW',
}
