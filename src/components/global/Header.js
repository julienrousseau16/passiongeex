import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LangContext } from '../../tools/LangContext'

import './Header.css'

const Header = () => {

  const { lang, setLang } = useContext(LangContext);

  const langToggle = () => {
    lang === 'FR' ? setLang('EN') : setLang('FR')
  }

  return (
    <div className='Header'>
      <div className='HeaderLogoContainer'>
        <img src={require('../../pictures/logo-short.png')} alt='logo' />
      </div>
      <nav className='Navbar'>
        <ul className='NavList'>
          <Link to='/home/profile' className='NavItem'>
            {lang === 'FR' ? 'Profil' : 'Profile'}
          </Link>
          <Link to='/home/projects' className='NavItem'>
            {lang === 'FR' ? 'Projets' : 'Projects'}
          </Link>
          <Link to='/home/references' className='NavItem'>
            {lang === 'FR' ? 'Références' : 'References'}
          </Link>
        </ul>
      </nav>
      <div className='HeaderLang'>
        <p onClick={langToggle}>{lang}</p>
      </div>
    </div>
  )
}
export default Header
