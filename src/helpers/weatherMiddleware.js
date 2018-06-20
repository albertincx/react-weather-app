const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?APPID=1da8df68b32007e2e6dacaae0a357ad7&units=Metric'

export default ({dispatch, getState}) => {
  return (next) => (action) => {

    switch (action.type) {

      case 'get_city_weather' :
        const name = action.city

        fetch(`${WEATHER_API}&q=${name}`)
          .then(res => {
            if (res.status === 200) {
              return res.json()
            } else {
              throw 'City not Found'
            }
          }).then(res => {
          const {name, coord, main: {temp: weather}} = res
          const city = {name, coord, weather}
          dispatch({type: 'weather_success', city})

        }).catch(e => {
          alert(e.toString());
        })

        break

      case 'get_current_weather' :
        const coords = action.coords

        fetch(`${WEATHER_API}&lat=${coords[0]}&lon=${coords[1]}`)
          .then(res => {
            if (res.status === 200) {
              return res.json()
            } else {
              throw 'Not Found'
            }
          }).then(res => {
          const {name, coord, main: {temp: weather}} = res
          const city = {name, coord, weather}
          dispatch({type: 'current_success', city})

        }).catch(e => {
          alert(e.toString());
        })

        break
      default:
        break
    }

    return next(action)
  }
}