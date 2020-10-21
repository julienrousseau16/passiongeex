import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProjectContext } from '../../tools/ProjectContext'

import Header from './Header'
import FullProject from '../projects/FullProject'
import ProfilePage from '../profile/ProfilePage'
import ProjectsContainer from '../projects/ProjectsContainer'
import ReferencesContainer from '../references/ReferencesContainer'

import './MainContainer.css'

const MainContainer = () => {

  const [appear, setAppear] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='MainContainer' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <Header />
      <div className='Content'>
        <ProjectContext.Provider value={{selectedProject, setSelectedProject}}>
          <Switch>
            <Route exact path='/home/profile'>
              <ProfilePage />
            </Route>
            <Route path='/home/projects'>
              <ProjectsContainer />
            </Route>
            <Route path='/home/project/'>
              <FullProject />
            </Route>
            <Route path='/home/references'>
              <ReferencesContainer />
            </Route>
          </Switch>
        </ProjectContext.Provider>
      </div>
    </div>
  )
}
export default MainContainer
