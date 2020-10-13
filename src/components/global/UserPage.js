import React from 'react'

import { Link } from 'react-router-dom'

import './UserPage.css'

const UserPage = () => {
  return (
    <div className='UserPage'>
      <h1>UserPage</h1>
      <div className='UsersContainer'>
        <Link to='/main' className='User'>
          <img src={require('../../pictures/user.png')} alt='user' />
          <h3>Visiteur</h3>
        </Link>
        <Link to='/main' className='User'>
          <img src={require('../../pictures/user2.png')} alt='user' />
          <h3>Recruteur</h3>
        </Link>
      </div>
      <p>ça va pas changer grand chose</p>
    </div>
  )
}
export default UserPage
