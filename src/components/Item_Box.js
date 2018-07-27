import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item_Box.css';

function Item_Box(props){
    return <div className="Item_Box"><img src={props} /></div>
}

export default Item_Box;
