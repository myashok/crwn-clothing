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
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
