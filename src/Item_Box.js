import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item_Box.css';

class Item_Box extends Component {
    static propTypes={
        photo: PropTypes.string.isRequired
    }

  render() {
    return (
        <div className="Item_Box">
            <img src={this.props.photo} />
        </div>
    );
  }
}

export default Item_Box;