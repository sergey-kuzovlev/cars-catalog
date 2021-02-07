const cars = (state = [], action: any) => {
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