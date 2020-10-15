import React from 'react'

import './FullProject.css'

const FullProject = ({project}) => {

  return (
    <div>
      <h1 style={{ color: 'white' }}>Page Projet</h1>
      <p style={{ color: 'white' }}>{project.name}</p>
    </div>
  )
}
export default FullProject
