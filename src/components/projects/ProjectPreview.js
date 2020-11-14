import React from 'react'
import { NavLink } from 'react-router-dom'

import './ProjectPreview.css'

const ProjectPreview = ({ project }) => {

  return (
    <div className='ProjectPreview'>
      {window.screen.width < 769 ?
        <NavLink to={{ pathname: `/home/project/${project.slug}`, project: project }}><img style={project.slug === 'passiongeex' ? { border: '1px solid grey' } : null} src={require('../../pictures/' + project.mobilepic)} alt='project preview' /></NavLink>
        : <NavLink to={{ pathname: `/home/project/${project.slug}`, project: project }}><img style={project.slug === 'passiongeex' ? { border: '1px solid grey' } : null} src={require('../../pictures/' + project.pic)} alt='project preview' /></NavLink>
      }
    </div>
  )
}
export default ProjectPreview
