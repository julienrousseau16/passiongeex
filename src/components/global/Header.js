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
      <Link to='/home' className='HeaderLogoContainer'>
        {window.screen.width < 768 ?
          <img src={require('../../pictures/logo-short.png')} alt='logo' />
          : <img src={require('../../pictures/logo.png')} alt='logo' />
        }
      </Link>
      <nav className='Navbar'>
        <ul className='NavList'>
          <Link to='/home/profile' className='NavItem'>
            {lang === 'FR' ? 'Profil' : 'Profile'}
          </Link>
          <Link to='/home/projects' className='NavItem'>
            {lang === 'FR' ? 'Projets Web' : 'Web Projects'}
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
