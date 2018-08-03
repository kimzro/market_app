import React, { Component } from 'react';
import Lalastudio_Shop from './lalastudio_shop';
import Lalastudio_Header from './lalastudio_header';
import '../indiv_page.css';

class Lalastudio extends Component{    
    state={
        title:"lalastudio"
    }

    render(){
        return(
            <div className="indiv_page">
                <div className="indiv_header">
                <Lalastudio_Header/>
                </div>
                <Lalastudio_Shop />                
            </div>
        )
    }
}

export default Lalastudio;