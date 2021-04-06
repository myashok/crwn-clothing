import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component.jsx'
function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={Shop}/>
    </Switch>
    </div>
  );
}

export default App;
