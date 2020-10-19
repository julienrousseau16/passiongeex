import React from 'react'

import './Experience.css'

const Experience = ({ lang, expe: { date, engDate, position, engPosition, company, reference, engReference, missions, engMissions } }) => {
  return (
    <div className='Experience'>
      <p>
        {lang === 'FR' ? date : engDate}
      </p>
      <h3>
        {lang === 'FR' ? position : engPosition}
      </h3>
      <p>{company}</p>
      <p>
      {lang === 'FR' ? reference : engReference}
      </p>
    </div>
  )
}
export default Experience
