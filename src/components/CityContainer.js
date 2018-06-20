import React from 'react'
import { connect } from 'react-redux'
import CityItem from './CityItem'

class CityContainer extends React.Component {

  render () {
    return (
      <div className='city-container'>
        {cities && cities.map((item) => (<CityItem item={item}/>))}
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {cities} = state.weather
  return {
    cities
  }
}

export default connect(mapStateToProps)(CityContainer)