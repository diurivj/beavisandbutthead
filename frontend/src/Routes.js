import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import AllCharacters from './components/characters/AllCharacters'
import OneCharacter from './components/characters/OneCharacter'

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={HomeContainer} />
    <Route exact path={'/characters'} component={AllCharacters} />
    <Route exact path={'/characters/1'} component={OneCharacter} />
    <Route component={() => <p>404</p>} />
  </Switch>
)

export default Routes
