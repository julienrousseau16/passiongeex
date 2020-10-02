import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './components/Landing'
import MainContainer from './components/MainContainer'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/main'>
          <MainContainer />
        </Route>
      </Switch>

    </div>
  )
}

export default App
