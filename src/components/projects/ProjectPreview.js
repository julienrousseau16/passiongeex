import React, { useContext } from 'react'
import {NavLink as Link} from 'react-router-dom'
import { ProjectContext } from '../../tools/ProjectContext'


import './ProjectPreview.css'

const ProjectPreview = ({ project }) => {

  const { setSelectedProject } = useContext(ProjectContext)

  return (
    <div className='ProjectPreview'>
      <img src={require('../../pictures/' + project.mobilepic)} alt='project preview' />
      <Link onClick={() => setSelectedProject(project)} to={`/home/project/${project.slug}`}>TEST</Link>
    </div>
  )
}
export default ProjectPreview
