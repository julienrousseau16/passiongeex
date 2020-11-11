import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faHourglassHalf, faSchool } from '@fortawesome/free-solid-svg-icons'

import './Education.css'

const Education = ({ lang, educ: { name, engName, date, engDate, where } }) => {
  return (
    <div className='Education'>
      <div className='EducationInfo' id='duration'>
        <FontAwesomeIcon icon={faHourglassHalf} className='icon' />
        <p>
          {lang === 'FR' ? date : engDate}
        </p>
      </div>
      <div className='EducationInfo'>
        <FontAwesomeIcon icon={faSchool} className='icon' />
        <p>{where}</p>
      </div>
      <div className='EducationInfo' id='diploma'>
        <FontAwesomeIcon icon={faGraduationCap} className='icon' />
        <h3>
          {lang === 'FR' ? name : engName}
        </h3>
      </div>
    </div>
  )
}
export default Education
