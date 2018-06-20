import { combineReducers } from 'redux'

import { cities } from './cities.reducer'
import { current } from './current.reducer'

const rootReducer = combineReducers({
  cities,
  current
})

export default rootReducer