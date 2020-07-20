import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Navbar from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import CollectionPage from './pages/collectionpage/collectionpage.component';
import ContactUs from './pages/contactuspage/contactus.component';
import Signin from './components/sign-in/sign-in.component';
import Signup from './components/sign-up/sign-up.component';
import CheckoutPage from './pages/checkoutpage/checkout.component';
import ProductPage from './pages/productpage/productpage.component';

const App = () => {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/shop/livingroom" component={CollectionPage} /> 
        <Route exact path="/shop/kitchendinner" component={CollectionPage} /> 
        <Route exact path="/shop/bedroom" component={CollectionPage} /> 
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/customer/checkout" component={CheckoutPage} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/product" component={ProductPage} />   
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
