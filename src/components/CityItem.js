import React from 'react'
import { connect } from 'react-redux'

const CityItem = ({item}) => (
  <div>
    <div className='city-name'>
      {item.name}
    </div>
  </div>
)

function mapStateToProps (state) {
  const {alert} = state
  return {
    alert
  }
}

export default connect(mapStateToProps)(CityItem)