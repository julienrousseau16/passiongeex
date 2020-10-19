import React from 'react'

import { experiences } from '../../tools/Experiences'

import Experience from './Experience'

import './ExperiencesContainer.css'

const ExperiencesContainer = ({ lang }) => {
  return (
    <div className='ExperiencesContainer'>
      <h1>
        {lang === 'FR' ? 'Expériences' : 'Experiences'}
      </h1>
      <div>
        {experiences.map(expe => <Experience key={expe.id} lang={lang} expe={expe} />)}
      </div>
    </div>
  )
}
export default ExperiencesContainer
