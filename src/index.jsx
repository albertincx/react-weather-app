import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './helpers'
import CityContainer from './components/CityContainer'
import './css/style.css'

render(
  <Provider store={store}>
    <CityContainer />
  </Provider>,
  document.getElementById('app')
)
