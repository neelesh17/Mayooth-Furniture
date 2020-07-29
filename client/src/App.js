import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Navbar from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import CollectionPage from './pages/collectionpage/collectionpage.component';
import ContactUs from './pages/contactuspage/contactus.component';
import Signin from './components/sign-in/sign-in.component';
import Signup from './components/sign-up/sign-up.component';
import CheckoutPage from './pages/checkoutpage/checkout.component';
import ProductPage from './pages/productpage/productpage.component';

const App = ({currentUser}) => {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/shop/:collectionId" component={CollectionPage} /> 
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/shop/:collectionId/:productId" component={ProductPage} />   
        <Route 
              exact={true} 
              path="/signup" 
              render={() => 
                currentUser ? 
                (<Redirect to='/'/>) : 
                (<Signup/>)
              } 
            />
        <Route 
              exact={true} 
              path="/login" 
              render={() => 
                currentUser ? 
                (<Redirect to='/'/>) : 
                (<Signin/>)
              } 
            />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
