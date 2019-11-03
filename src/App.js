import React, { PureComponent } from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import Listings from './components/Listings';
import AddListing from './components/AddListing/AddListing';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import {
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

class App extends PureComponent {
  componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/js?key=${ process.env.API_KEY }`, {
      mode: 'no-cors'
    })
      .then(res => console.log('google maps res', res))
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/listings' component={ Listings } />
          <Route exact path='/add-listing' component={ AddListing } />
          <Route exact path='/login' component={ LoginPage }/>
          <Route exact path='/register' component={ RegisterPage }/>
          <Route />
        </Switch>
      </div>
    );
  };
};

export default App;
