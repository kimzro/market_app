import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Market_Box from './Market_Box'


const markets=[
  "lalastudio",
  "j.ablee",
  "peachandming__official"
]

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <span className="logo">Market</span>
        <Market_Box />
        <Market_Box />
      </div>
    );
  }
}

export default App;
