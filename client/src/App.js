import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Navbar from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import CollectionPage from './pages/collectionpage/collectionpage.component';

const App = () => {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/livingroom" component={CollectionPage} /> 
        <Route exact path="/kitchendinner" component={CollectionPage} /> 
        <Route exact path="/bedroom" component={CollectionPage} /> 
        <Route exact path="/contactus" component={CollectionPage} /> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
