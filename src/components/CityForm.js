import React from 'react'

const CityForm = ({onSubmit}) => (
  <form action="" onSubmit={onSubmit}>
    <input type="text" required={true} name='city'/>
    <button type='submit'>Add city</button>
  </form>
)

export default CityForm