import React from 'react'

import './Mission.css'

const EngMission = ({ engMission: { engTitle, engTasks } }) => {
  return (
    <div className='Mission'>
      <h4>{engTitle}</h4>
      <ul>
        {engTasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
    </div>
  )
}
export default EngMission
