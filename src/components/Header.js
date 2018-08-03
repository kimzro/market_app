import React, { Component } from 'react';
import './Header.css';


class Header extends Component{
    state={
        title:""
    }
    changeTitle(t){
        this.setState({market_title:t});
    }
    render(){
        return(
            <div className="Header">
                <a href={"http://localhost:3000"} className="logo">Zarket:</a>

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