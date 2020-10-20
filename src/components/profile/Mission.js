import React from 'react'

import './Mission.css'

const Mission = ({ mission: { title, tasks }}) => {
  return (
    <div className='Mission'>
      <h4>{title}</h4>
      <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
    </div>
  )
}
export default Mission
