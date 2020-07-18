import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Navbar from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';


const App = () => {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
