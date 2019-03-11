import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class ProductImage extends Component {
  constructor() {
    super();
    this.state = {
     
    };

    this.styles={
      margin: 3,
    padding: 3,
    border: '1px solid black',
    width: 80,
    height: 80
    };
    this.imgStyle={
       width: 80,
    height: 80

    };
  }

  render() {
    return (
      <div style={this.styles}>
         <img  style={this.imgStyle} src={"https://i.imgur.com/"+this.props.imageSrc+".jpg"} />
      </div>
    );
  }
}

export default ProductImage;
