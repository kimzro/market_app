import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            market_title:""
        }
    }
    changeTitle(t){
        this.setState({market_title:t});
    }
    render(){
        return(
            <div className="Header">
                <span className="logo">Zarket</span>
                    {menu_Box("order")}
                    {menu_Box("Shop")}
                    {menu_Box("About")}
            </div>
        )
    }
}

function menu_Box(text){
    return(
        <div className="menu_Box">
            {text}
        </div>
    )
}

export default Header;