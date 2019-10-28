import React, { PureComponent } from 'react';
import Nav from './components/Nav';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  };
};

export default App;
