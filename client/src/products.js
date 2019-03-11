
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ProductImage from './product-image';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

 class Products extends Component {
  constructor() {
    super();
	this.state = {products:[]}
 
  }
  
   
  componentDidMount(){
	fetch('/products')
	.then(res=>res.json())
	.then(products=>this.setState({products}));
  
 
    }
  


  render() {
    return (
      
                <table border="1" align="center">
                  <thead>
					  <tr>
						  
						  <th >Product Name</th>
						  
								  <th>
							  Unit Price</th>
						  <th>Units In Stock</th>
						  <th>Units On Order</th>
						  <th>Image</th>
						  <th>Is In Stock?</th>
					  </tr>
				   </thead>
					<tbody>
                 
                    {this.state.products.map(product=> <tr  key={product.productID}>
                    
                     <td> <Link to = {'/products/'+product.productID+"/"+product.productName}>{product.productName}</Link></td>
                    <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(product.unitPrice)}</td>
                    <td>{product.unitsInStock}</td>
                    <td>{product.unitsOnOrder}</td>
                   <td> <ProductImage imageSrc={product.productID}/> </td>
                   <td> <ProductImage   imageSrc={product.unitsInStock>0?'eY4aR2m':'vcfGWWW'}/> </td>
                    </tr>)}
           
                 </tbody>
                   </table>
       
    );
  }
}


export default Products;
