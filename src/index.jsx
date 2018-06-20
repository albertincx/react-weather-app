import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import persisStore from './helpers/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import CityContainer from './components/CityContainer'
import './css/style.css'
let store = persisStore()
render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <CityContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
