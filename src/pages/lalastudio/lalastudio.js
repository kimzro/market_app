import React, { Component } from 'react';
import ReactDOM from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Big from '../modal_test';
import Lalastudio_About from './lalastudio_about';
import Lalastudio_Shop from './lalastudio_shop';
import '../indiv_page.css';

class Lalastudio extends Component{
    render(){
        return(
            <div className="indiv_page">
                <Route exact path='/lalastudio' component={Lalastudio_About} />
                <Route path={'${match.url}/shop'} component={Lalastudio_Shop} />
                <Big/>
            </div>
        )
    }
}

export default Lalastudio;