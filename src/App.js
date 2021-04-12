import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import React from 'react';
import Shop from './pages/shop/shop.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        }
        );
      }
      else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    console.log("currentUser " + JSON.stringify(this.props.currentUser));
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
