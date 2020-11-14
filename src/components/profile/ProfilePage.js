import React, { useEffect, useState, useContext } from 'react'

import { aboutMe } from '../../tools/Introduction'
import { LangContext } from '../../tools/LangContext'

import EducationContainer from './EducationContainer'
import ExperiencesContainer from './ExperiencesContainer'

import './ProfilePage.css'

const ProfilePage = () => {

  const { lang } = useContext(LangContext)
  const [appear, setAppear] = useState(false)
  const [complete, setComplete] = useState(false)

  const textToggle = () => {
    setComplete(!complete)
  }

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='ProfilePage' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <header>
      <div className='ProfileDescription' style={!complete ? { height: '200px' } : { height: 'auto' }}>
        {
          lang === 'FR' ?
            aboutMe.fr.map((text, index) => <p key={index}>{text}</p>)
            : aboutMe.eng.map((text, index) => <p key={index}>{text}</p>)
        }
      </div>
      <button
        style={!complete ? { marginTop: '10px' } : { marginTop: 0 }}
        onClick={textToggle}
      >{lang === 'FR' && !complete ? 'Lire plus'
        : lang === 'FR' && complete ? 'Lire moins'
          : lang !== 'FR' && !complete ? 'Read more'
            : 'Read less'}
      </button>
      </header>

      <ExperiencesContainer lang={lang} />
      <EducationContainer lang={lang} />

      <div className='ProfileRedirection'>
        <p>
          {lang === 'FR' ? 'Plus d\'informations disponibles sur' : 'More information available on'}
        </p>
        <a href='https://www.linkedin.com/in/julienrousseau-webdev/' target='_blank' rel="noopener noreferrer">
          <img src={require('../../pictures/linkedIn.png')} alt='LinkedIn' />
        </a>
      </div>
    </div>
  )
}
export default ProfilePage
