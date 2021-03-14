import React, { useContext } from 'react'
import { NavLink as Link } from 'react-router-dom'

import { LangContext } from '../../tools/LangContext'
import { landingText } from '../../tools/AboutMe'

import './HomeLanding.css'

const HomeLanding = () => {

  const { lang } = useContext(LangContext)

  return (
    <div className='HomeLanding'>
      <div className='HomeLandingHeader'>
        <img src={require('../../pictures/landingimg.png')} alt='' />
        <div className='HomeLandingIntro'>
          {
            lang === 'FR' ?
              landingText.fr.map((text, index) => <p key={index}>{text}</p>)
              : landingText.eng.map((text, index) => <p key={index}>{text}</p>)
          }
        </div>
      </div>
      <div className='HomeLanding-Options'>
        <Link to='/home/profile' className='Option'>
          {lang === 'FR' ? 'Mon Parcours' : 'My Profile'}</Link>
        <Link to='home/projects' className='Option'>
          {lang === 'FR' ? 'Mes Projets' : 'My Projects'}
        </Link>
        {
          lang === 'FR' ?
          <a className='Option' href={require('../../docs/CV_JR_Webdev.pdf')} download>Télécharger mon CV</a>
            : <a className='Option' href={require('../../docs/Resume_JR_Webdev.pdf')} download>Download my Resume</a>
        }
      </div>
    </div>
  )
}
export default HomeLanding
