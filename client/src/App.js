import styles from './App.module.scss';

import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import React from 'react';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { useEffect, lazy } from 'react';
import { Suspense } from 'react';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shopPage/shop.component.jsx'));
const CheckoutPage = lazy(() => import('./pages/checkoutPage/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className={styles['App']}>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
