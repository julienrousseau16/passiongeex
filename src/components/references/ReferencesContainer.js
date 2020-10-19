import React, { useEffect, useState, useContext } from 'react'

import { LangContext } from '../../tools/LangContext'
import { refs } from '../../tools/Refs'

import Reference from './Reference'

import './ReferencesContainer.css'

const ReferencesContainer = () => {

  const { lang } = useContext(LangContext)
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='ReferencesContainer' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <h1>
        {lang === 'FR' ? 'Références' : 'References'}
      </h1>
      <div>
        {refs.map(reference => <Reference key={reference.id} lang={lang} reference={reference} />)}
      </div>
      <div className='ReferencesRedirection'>
        <p>
          {lang === 'FR' ? 'Retrouvez ces références directement sur' : 'These references are available on'}
        </p>
        <a href='https://www.linkedin.com/in/julienrousseau-webdev/' target='_blank' rel="noopener noreferrer">
          <img src={require('../../pictures/linkedIn.png')} alt='LinkedIn' />
        </a>
      </div>
    </div>
  )
}
export default ReferencesContainer