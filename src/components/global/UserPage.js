import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import './UserPage.css'

const UserPage = () => {

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='UserPage' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <img className='topLogo' src={require('../../pictures/logo.png')} alt='logo' />
      <h1>Qui-est ce ?</h1>
      <div className='UsersContainer'>
        <div className='User'>
          <Link to='/home'><img src={require('../../pictures/user.png')} alt='user' /></Link>
          <h3>Visiteur</h3>
        </div>
        <div className='User'>
          <Link to='/home'><img src={require('../../pictures/user2.png')} alt='user' /></Link>
          <h3>Recruteur</h3>
        </div>
      </div>
      <p>(On this app, feel free to switch to English whenever you want by clicking on the top-right corner of the page)</p>
    </div>
  )
}
export default UserPage
