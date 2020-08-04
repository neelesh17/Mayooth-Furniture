import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Navbar from './components/nav/nav.component';
import Footer from './components/footer/footer.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

import { checkUserSession } from './redux/user/user.actions';
import { fetchingItemsStart } from './redux/products/product.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const CollectionPage = lazy(() => import('./pages/collectionpage/collectionpage.component'));
const ContactUs = lazy(() => import('./pages/contactuspage/contactus.component'));
const Signin = lazy(() => import('./components/sign-in/sign-in.component'));
const Signup = lazy(() => import('./components/sign-up/sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkout.component'));
const ProductPage = lazy(() => import('./pages/productpage/productpage.component'));
const StripeCheckout = lazy(() => import('./components/stripe-checkout/stripe-checkout.component'));

const App = ({currentUser,  checkUserSession, fetchingItemsStart}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  useEffect(() => {
    fetchingItemsStart();
  }, [fetchingItemsStart]);
  return (
    <div >
      <Navbar />
      <Switch>
 
          <Suspense fallback={<Spinner />}>
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
            <Route exact path="/payment" component={StripeCheckout}/>
          </Suspense>
     
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const  mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchingItemsStart: () => dispatch(fetchingItemsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
