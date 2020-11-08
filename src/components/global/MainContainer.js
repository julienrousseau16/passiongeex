import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import HomeLanding from './HomeLanding'
import FullProject from '../projects/FullProject'
import ProfilePage from '../profile/ProfilePage'
import ProjectsContainer from '../projects/ProjectsContainer'
// import ReferencesContainer from '../references/ReferencesContainer'

import './MainContainer.css'

const MainContainer = () => {

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='MainContainer' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <Header />
      <div className='Content'>
        <Switch>
          <Route exact path='/home'>
            <HomeLanding />
          </Route>
          <Route path='/home/profile'>
            <ProfilePage />
          </Route>
          <Route path='/home/projects'>
            <ProjectsContainer />
          </Route>
          <Route path='/home/project/:slug'>
            <FullProject />
          </Route>
          {/* To be uncommented when references will be displayed on LinkedIn
          
          <Route path='/home/references'>
            <ReferencesContainer />
          </Route> */}
        </Switch>
      </div>
    </div>
  )
}
export default MainContainer
