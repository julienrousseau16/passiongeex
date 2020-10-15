import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {

  return (
    <div className='Header'>
      <div className='HeaderLogoContainer'>
        <img src={require('../../pictures/logo-short.png')} alt='logo' />
      </div>
      <nav className='Navbar'>
        <ul className='NavList'>
          <Link to='/profile' className='NavItem'>Profil</Link>
          <Link to='/profile/projects' className='NavItem'>Projets</Link>
          <Link to='/profile/references' className='NavItem'>Références</Link>
        </ul>
      </nav>
    </div>
  )
}
export default Header
