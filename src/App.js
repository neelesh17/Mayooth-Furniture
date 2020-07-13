import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/nav/nav.component';

import HomePage from './pages/homepage/homepage.component';


const App = () => {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
