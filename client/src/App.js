import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Landing, Header } from './components';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
