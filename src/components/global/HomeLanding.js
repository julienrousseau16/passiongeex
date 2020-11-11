import React, { useContext } from 'react'
import { NavLink as Link } from 'react-router-dom'

import { LangContext } from '../../tools/LangContext'
import { landingText } from '../../tools/Introduction'

import './HomeLanding.css'

const HomeLanding = () => {

  const { lang } = useContext(LangContext)

  return (
    <div className='HomeLanding'>
      <img src={require('../../pictures/landingimg.png')} alt='' />
      <div className='HomeLandingIntro'>
        {
          lang === 'FR' ?
            landingText.fr.map((text, index) => <p key={index}>{text}</p>)
            : landingText.eng.map((text, index) => <p key={index}>{text}</p>)
        }
      </div>
      <div className='HomeLanding-Options'>
        <Link to='/home/profile' className='Option'>
          {lang === 'FR' ? 'Mon Parcours' : 'My Profile'}</Link>
        <Link to='home/projects' className='Option'>
          {lang === 'FR' ? 'Mes Projets' : 'My Projects'}
        </Link>
        {
          lang === 'FR' ?
            <p className='Option'>Télécharger mon CV (à venir)</p>
            : <p className='Option'>Download my Resume (coming soon)</p>
        }
      </div>
    </div>
  )
}
export default HomeLanding
