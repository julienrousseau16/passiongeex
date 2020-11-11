import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHourglassHalf, faUser } from '@fortawesome/free-solid-svg-icons'

import Mission from './Mission'
import EngMission from './EngMission'

import './Experience.css'

const Experience = ({ lang, expe: { id, date, engDate, position, engPosition, company, legend, engLegend, missions, engMissions } }) => {
  return (
    <div className='Experience'>
      <div className='ExperienceInfo' id='time'>
        <FontAwesomeIcon icon={faHourglassHalf} className='icon' />
        <p>
          {lang === 'FR' ? date : engDate}
        </p>
      </div>
      <div className='ExperienceInfo'>
        <FontAwesomeIcon icon={faBuilding} className='icon' />
        <p>{company}</p>
      </div>
      <div className='ExperienceInfo' id='position'>
        <FontAwesomeIcon icon={faUser} className='icon' />
        <h3>
          {lang === 'FR' ? position : engPosition}
        </h3>
      </div>
      {
        legend !== '' && lang === 'FR' ?
          <p className='ExperienceLegend'>{legend}</p>
          : legend !== '' && lang !== 'FR' ?
            <p className='ExperienceLegend'>{engLegend}</p>
            : null
      }
      <div className='Missions'>
        {lang === 'FR' ?
          missions.map((mission, index) => <Mission key={index} mission={mission} />)
          : engMissions.map((engMission, index) => <EngMission key={index} engMission={engMission} />)}
      </div>
      {id > 1 && < hr className='ItemSeparator'/>}
    </div>
  )
}
export default Experience
