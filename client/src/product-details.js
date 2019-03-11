import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ProductImage from './product-image';

class ProductDetails extends Component {
  constructor({match}) {
    super();
    //console.log('match',match);
    this. params = match.params;
    this.state = {products:[],product :{}}
	
	
	   
  

    this.styles={
      margin: 3,
    padding: 3,
    border: '1px solid black',
    width: 80,
    height: 80
    };
   
  }
  
  componentDidMount(){
		fetch('/products')
		.then(res=>res.json())
		.then(products=>{
			//this.setState({products});
					
					let product = products.find(obj => {
			  return obj.productID === this.params.id
			})
				this.setState({product:product}) 
			
					
			 console.log('arr',this.state);
		});
 
		
    }

  render() {
    return (
      <div >
   
	     <span >
			<ProductImage imageSrc={this.state.product.productID}/>
		  </span>
			 <h2>Name: {this.state.product.productName}</h2>
			 
		
        <h2>Price: {this.state.product.unitPrice}</h2>
        <h2>Stock: {this.state.product.unitsInStock}</h2>
        <h2>Order: {this.state.product.unitsOnOrder}</h2>
       <br/>
       
       <Link to = {'/products'}>back to products list</Link>
      </div>
    );
  }
}

export default ProductDetails;