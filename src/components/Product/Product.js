import React, { Component } from 'react';
import './Product.css';
import '../../styles/flexborder.css';

class Product extends Component {
    //to do
    //set props -> Product
    //
  render() {
    return (
      <section className="Product flex-border-column-centered">
        <img src={this.props.imgSrc} />
       
        <br/>
        {this.props.item}
        <br/>
        {this.props.price}
      </section>
    );
  }
}

export default Product;


