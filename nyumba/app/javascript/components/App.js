import React from 'react'
import Houses from './Houses/Houses'
import House from './House/House'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route exact path ="/" component = {Houses} />
      <Route exact path ="/:slug" component = {House} />
    </Switch>
  )
}

export default App