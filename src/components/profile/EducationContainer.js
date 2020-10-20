import React, { useState } from 'react'

import Education from './Education'

import { education } from '../../tools/Education'

import './EducationContainer.css'

const EducationContainer = ({ lang }) => {

  const [show, setShow] = useState(false)
  const showToggle = () => setShow(!show)

  return (
    <div className='EducationContainer'>
      <h1 onClick={showToggle}>
        {lang === 'FR' ? 'Formations' : 'Education'}
      </h1>
      {show && <div className='EducWrapper'>
        {education.map(educ => <Education key={educ.id} lang={lang} educ={educ} />).reverse()}
      </div>}
    </div>
  )
}
export default EducationContainer
