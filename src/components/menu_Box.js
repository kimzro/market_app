import React, {Component} from 'react';
import './menu_Box.css'
import { Link } from 'react-router-dom';

class Menu_Box extends Component{
    render(){return(
    <div className="menu_Box">
    <br/><br/>
    <Link to="/lalastudio">Home</Link><br/><br/>
    <Link to="/lalastudio/shop">Shop</Link><br/><br/>
    order<br/><br/>
    </div>
    )}
}

export default Menu_Box;