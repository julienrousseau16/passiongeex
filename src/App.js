import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LangContext } from './tools/LangContext'

import Landing from './components/global/Landing'
import MainContainer from './components/global/MainContainer'
import UserPage from './components/global/UserPage'

import './App.css'

const App = () => {

  const [lang, setLang] = useState('FR')

  return (
    <div className='App'>

      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/user'>
          <UserPage />
        </Route>
        <LangContext.Provider value={{ lang, setLang }}>
          <Route path='/home'>
            <MainContainer />
          </Route>
        </LangContext.Provider>
      </Switch>

    </div>
  )
}

export default App
