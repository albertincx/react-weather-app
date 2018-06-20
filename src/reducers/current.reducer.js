export function current (state = {}, action) {
  switch (action.type) {

    case 'current_success':
      return {
        loading: false,
        error: false,
        success: true,
        current: action.city,
      }
    default:
      break
  }
  return state
}