import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'
import weatherMiddleware from './weatherMiddleware'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer,
    applyMiddleware(
      thunkMiddleware,
      weatherMiddleware
    ))
  let persistor = persistStore(store)
  return {store, persistor}
}