import React from 'react'
import { NavLink } from 'react-router-dom'

import './ProjectPreview.css'

const ProjectPreview = ({ project }) => {

  return (
    <div className='ProjectPreview'>
      <NavLink to={{ pathname: `/home/project/${project.slug}`, project: project }}><img src={require('../../pictures/' + project.mobilepic)} alt='project preview' /></NavLink>
      <p style={{ color: '#fff' }}>{project.slug}</p>
    </div>
  )
}
export default ProjectPreview
