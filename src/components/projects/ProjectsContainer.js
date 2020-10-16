import React, { useEffect, useState, useContext } from 'react'

import ProjectPreview from './ProjectPreview'

import { LangContext } from '../../tools/LangContext'
import { projects } from '../../tools/Projects'

import './ProjectsContainer.css'

const ProjectsContainer = () => {

  const [appear, setAppear] = useState(false)
  const { lang } = useContext(LangContext)

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='ProjectsContainer' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <h2>
        {lang === 'FR' ? '[En cours]' : '[Work in progress]'}
      </h2>
      <div className='ProjectsCategory'>
        {projects
          .filter(project => project.type === 'school')
          .map(project => <ProjectPreview key={project.id} project={project} />)
        }
      </div>
      <h2>
        {lang === 'FR' ? 'Personnel' : 'Personal'}
      </h2>
      <div className='ProjectsCategory'>
        {projects
          .filter(project => project.type === 'hackathon')
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
      <h2>
        {lang === 'FR' ? 'Stage' : 'Internship'}
      </h2>
      <div className='ProjectsCategory'>
        {projects
          .filter(project => project.type === 'hackathon')
          .map(project => <ProjectPreview key={project.id} project={project} />)
        }
      </div>
      <h2>
        {lang === 'FR' ? 'Ecole': 'School'}
      </h2>
      <div className='ProjectsCategory'>
        {projects
          .filter(project => project.type === 'school')
          .map(project => <ProjectPreview key={project.id} project={project} />)
        }
      </div>
    </div>
  )
}
export default ProjectsContainer
