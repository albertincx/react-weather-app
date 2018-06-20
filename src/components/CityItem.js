import React from 'react'
import { connect } from 'react-redux'

const CityItem = ({item, hasRemove, onRemove}) => (
  <div>
    <div className='city-name'>
      {item.name}, {item.weather} <sup>&deg;</sup>
    </div>

    {hasRemove ? <button className='remove' onClick={onRemove}>del</button> : null}
  </div>
)

function mapStateToProps (state) {
  const {alert} = state
  return {
    alert
  }
}

export default connect(mapStateToProps)(CityItem)