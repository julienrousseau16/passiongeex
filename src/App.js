import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './components/global/Landing'
import MainContainer from './components/global/MainContainer'
import UserPage from './components/global/UserPage'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/user'>
          <UserPage />
        </Route>
        <Route path='/main'>
          <MainContainer />
        </Route>
      </Switch>

    </div>
  )
}

export default App
