import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import './Landing.css'

const Landing = () => {

  const [toUser, setToUser] = useState(false)
  useEffect(() => {
    setTimeout(() => setToUser(true), 3000);
  }, [])

  return (
    <div className='Landing'>
      <img className='App_logo' src={require('../../pictures/logo.png')} alt='main-logo' />
      { toUser ? <Redirect to='/user' /> : null }
    </div>
  )
}
export default Landing
