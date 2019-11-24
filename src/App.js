import React, {Component} from 'react';
import { Route , Switch } from 'react-router-dom'
import { Colors , Color , NewColor } from './containers'
import NotFound from './ui/NotFound'
import Menu from './ui/Menu'

import '../styles/App.scss'


const App = () => 
  <Switch>
    <Route exact path="/:id"/>    
    <Route component={({ match , location }) => (
        <div className="app">
            <Menu sort = { location.pathname.replace('/sort/' , '')} />
            <NewColor/>
            <Switch>
              <Route exact path="/" component={Colors}/> 
              <Route path="/sort/:sort" component={Colors}/> 
              <Route component={NotFound}/>
            </Switch>

        </div>
      )}/>
  </Switch>

export default App;
