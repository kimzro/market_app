import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from 'components/Header';
import main_Body from 'components/main_Body';
import Lalastudio from 'pages/lalastudio/lalastudio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={main_Body}/>
        <Route exact path="/lalastudio" component={Lalastudio}/>
      </div>
    );
  }
}

export default App;
