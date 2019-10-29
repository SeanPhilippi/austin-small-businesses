import React, { PureComponent } from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import Listings from './components/Listings';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/listings' component={ Listings }/>
          <Route />
          <Route />
          <Route />
        </Switch>
      </div>
    );
  };
};

export default App;
