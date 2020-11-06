import React, { useContext } from 'react'
import { NavLink as Link } from 'react-router-dom'

import { LangContext } from '../../tools/LangContext'
import { landingText } from '../../tools/Introduction'

import './HomeLanding.css'

const HomeLanding = () => {

  const { lang } = useContext(LangContext)

  return (
    <div className='HomeLanding'>
      <img src={require('../../pictures/profile.png')} alt='' />
      {
        lang === 'FR' ?
          landingText.fr.map((text, index) => <p key={index}>{text}</p>)
          : landingText.eng.map((text, index) => <p key={index}>{text}</p>)
      }
      <div className='HomeLanding-Options'>
        <Link to='/home/profile' className='Option'>Mon Parcours</Link>
        <Link to='home/projects' className='Option'>Mes Projets</Link>
        {
          lang === 'FR' ?
            <a href={require('../../docs/CV.pdf')} className='Option' download>Télécharger mon CV</a>
            : <a href={require('../../docs/resume.pdf')} className='Option' download>Download my Resume</a>
        }
      </div>
    </div>
  )
}
export default HomeLanding
