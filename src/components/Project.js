import React from 'react'

import './Project.css'

const Project = ({ project: { id, name, type, duration, team, link, github } }) => {

  return (
    <div className='Project'>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{duration}</p>
      <p>{team}</p>
      <p>{link}</p>
      <p>{github}</p>

    </div>
  )
}
export default Project
