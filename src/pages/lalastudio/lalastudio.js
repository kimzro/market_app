import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu_Box from '../../components/menu_Box';
import Big from '../modal_test';
import Lalastudio_Home from './lalastudio_home';
import Lalastudio_Shop from './lalastudio_shop';
import '../indiv_page.css';


class Lalastudio extends Component{
    render(){
        return(
            <div className="indiv_page">
                <Menu_Box/>
                <Route exact path="/lalastudio" component={Lalastudio_Home}/>
                <Route exact path="/lalastudio/shop" component={Lalastudio_Shop}/>
                <Big />
            </div>
        )
    }
}

export default Lalastudio;