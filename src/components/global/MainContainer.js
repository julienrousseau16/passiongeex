import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import ProfilePage from '../profile/ProfilePage'
import ProjectsContainer from '../projects/ProjectsContainer'
import References from '../references/References'

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
          <Route exact path='/profile'>
            <ProfilePage />
          </Route>
          <Route path='/profile/projects'>
            <ProjectsContainer />
          </Route>
          <Route path='/profile/references'>
            <References />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
export default MainContainer
