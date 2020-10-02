import React from 'react'
import { Link } from 'react-router-dom'

import './Landing.css'

const Landing = () => {
  return (
    <div className='Landing'>
      <Link to='/main'>
        <img className='App_logo' src={require('../pictures/logo.png')} alt='main-logo' />
      </Link>
    </div>
  )
}
export default Landing
