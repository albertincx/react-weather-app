let initialState = {
  cities: []
}

export function weather (state = initialState, action) {
  switch (action.type) {
    case 'weather_request':
      return {
        loading: true,
        success: false,
        error: false,
        ...action,
      }
    case 'weather_success':
      return {
        loading: false,
        error: false,
        success: true,
        ...action,
      }
    case 'weather_error':
      return {
        success: false,
        loading: false,
        error: true,
        ...action,
      }

    default:
      break
  }
  return state
}