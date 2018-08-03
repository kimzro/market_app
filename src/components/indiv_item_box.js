import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

export default class Indiv_Item_Box extends Component{
    static propTypes={
        pics: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
    }

    render(){
        return(
            <div className="item_block">
                <img src={this.props.pics} /><br/>
                {this.props.info}
            </div>
        )
    }
}