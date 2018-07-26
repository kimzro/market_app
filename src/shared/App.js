import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from 'components/Header';
import main_Body from 'components/main_Body';
import lalastudio from 'pages/lalastudio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={main_Body}/>
        <Route exact path="/lalastudio" component={lalastudio}/>
      </div>
    );
  }
}

export default App;
