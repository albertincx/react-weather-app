let initialState = {
  cities: []
}

export function cities (state = initialState, action) {
  switch (action.type) {

    case 'weather_success':
      return {
        loading: false,
        error: false,
        success: true,
        cities: state.cities.concat([action.city]),
      }
    case 'remove_city':
      return {
        loading: false,
        error: false,
        success: true,
        cities: state.cities.filter((x, i) => i !== action.index)
      }

    default:
      break
  }
  return state
}