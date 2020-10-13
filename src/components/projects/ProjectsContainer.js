import React from 'react'

import ProjectPreview from './ProjectPreview'

import { projects } from '../../tools/Projects'

import './ProjectsContainer.css'

const ProjectsContainer = () => {
  return (
    <div className='ProjectsContainer'>
      <h2>Ecole</h2>
      <div className='ProjectsCategory'>
        {projects
          .filter(project => project.type === 'school')
          .map(project => <ProjectPreview key={project.id} project={project} />)
        }
      </div>
      <h2>Hackathon</h2>
      <div className='ProjectsCategory'>
        {projects
          .filter(project => project.type === 'hackathon')
          .map(project => <ProjectPreview key={project.id} project={project} />)
        }
      </div>
    </div>
  )
}
export default ProjectsContainer
