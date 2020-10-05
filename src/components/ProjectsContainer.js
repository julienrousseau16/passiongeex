import React from 'react'

import Project from './Project'

import { projects } from '../tools/Projects'

import './ProjectsContainer.css'

const ProjectsContainer = () => {
  return (
    <div className='ProjectsContainer'>
      {projects.map(project => <Project key={project.id} project={project} />)}
    </div>
  )
}
export default ProjectsContainer
