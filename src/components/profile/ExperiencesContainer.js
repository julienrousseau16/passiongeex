import React, { useState } from 'react'

import { experiences } from '../../tools/Experiences'

import Experience from './Experience'

import './ExperiencesContainer.css'

const ExperiencesContainer = ({ lang }) => {

  const [show, setShow] = useState(false)
  const showToggle = () => setShow(!show)

  return (
    <div className='ExperiencesContainer'>
      <h1 onClick={showToggle}>
        {lang === 'FR' ? 'Expériences' : 'Experiences'}
      </h1>
      {show && <div className='ExpWrapper'>
        {experiences.map(expe => <Experience key={expe.id} lang={lang} expe={expe} />).reverse()}
      </div>}
    </div>
  )
}
export default ExperiencesContainer
