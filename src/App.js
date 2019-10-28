import React, { PureComponent } from 'react';
import Nav from './components/Nav';
import Listing from './components/Listing';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Nav />
        <Listing />
      </div>
    );
  };
};

export default App;
