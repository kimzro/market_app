import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Market_Box.css';
import Item_Box from './Item_Box';


class Title_Box extends Component{
  static propTypes={
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }

  render(){
      return(
          <div className="Item_Box">
              <p className="title">@{this.props.title}</p>
              <p>{this.props.info}</p>
          </div>
      )
  }
}

class Market_Box extends Component {
  static propTypes={
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    pics: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="Market_Box">
        <Title_Box title={this.props.title} info={this.props.info}/>
        {this.props.pics.map((pics, index)=>{
          return <Item_Box photo={pics} key={index} />
        })}
      </div>
    );
  }
}

export default Market_Box;