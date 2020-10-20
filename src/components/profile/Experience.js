import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHourglassHalf, faUser } from '@fortawesome/free-solid-svg-icons'

import Mission from './Mission'
import EngMission from './EngMission'

import './Experience.css'

const Experience = ({ lang, expe: { date, engDate, position, engPosition, company, missions, engMissions } }) => {
  return (
    <div className='Experience'>
      <div className='ExperienceInfo'>
        <FontAwesomeIcon icon={faBuilding} className='icon' />
        <p>{company}</p>
      </div>
      <div className='ExperienceInfo'>
        <FontAwesomeIcon icon={faHourglassHalf} className='icon' />
        <p>
          {lang === 'FR' ? date : engDate}
        </p>
      </div>
      <div className='ExperienceInfo'>
        <FontAwesomeIcon icon={faUser} className='icon' />
        <h3>
          {lang === 'FR' ? position : engPosition}
        </h3>
      </div>
      <div className='Missions'>
        {lang === 'FR' ?
          missions.map((mission, index) => <Mission key={index} mission={mission} />)
          : engMissions.map((engMission, index) => <EngMission key={index} engMission={engMission} />)}
      </div>
    </div>
  )
}
export default Experience
