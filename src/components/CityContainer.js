import React from 'react'
import { connect } from 'react-redux'
import CityItem from './CityItem'
import CityForm from './CityForm'

class CityContainer extends React.Component {

  constructor (props) {
    super(props)
    this.addCity = this.addCity.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  componentDidMount () {
    if ('geolocation' in navigator && !this.props.current) {
      navigator.geolocation.getCurrentPosition((e) => {
        const {latitude, longitude} = e.coords
        this.props.dispatch({
          type: 'get_current_weather', coords: [
            latitude, longitude
          ]
        })
      })
    }
  }

  onRemove (index) {
    this.props.dispatch({type: 'remove_city', index})
  }

  addCity (event) {
    event.preventDefault()
    const {cities} = this.props
    const city = event.target.city.value
    if (cities.find(o => o.name.toLowerCase() === city.toLowerCase())) {
      return alert('City exists')
    }

    this.props.dispatch({type: 'get_city_weather', city})
  }

  render () {
    const {cities, current} = this.props
    return (
      <div>
        {current ? <div className='current'>
          <div>Your place</div>
          <CityItem item={current}/>
        </div> : null}
        <CityForm onSubmit={this.addCity}/>
        <div className='city-container'>
          {cities && cities.map((item, index) => (
            <CityItem
              key={index}
              item={item}
              hasRemove={1}
              onRemove={() => this.onRemove(index)}/>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {cities} = state.cities
  const {current} = state.current

  return {
    cities,
    current
  }
}

export default connect(mapStateToProps)(CityContainer)