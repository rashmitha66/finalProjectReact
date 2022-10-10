import React, { Component } from 'react';
import 'bootstrap';
import ProductService from '../services/ProductService';
import m1 from '../images/tv.jfif';
import m2 from '../images/ac.jfif';
import m3 from '../images/mobile.jfif';
import m4 from '../images/wm.jfif';
import m5 from '../images/oven.jfif';
import img2 from '../images/img2.jfif';
import axios from 'axios';
import Cart from '../components/cart.component';
import {Link} from 'react-router-dom';

import {onIncrement,onDecrement} from './cart.component';

class Product extends Component {
  constructor(props){
    super(props)
    this.state={
      products:[],
      images : [{key : 1 , value : m1},{key:2,value:m2},{key:3,value:m3},{key:4,value:m4},{key:5,value:m5}],
      i:0,
      price:'',
      quantity:0

    }
   
  }
 

  componentDidMount(){
    ProductService.getProducts().then((res)=>{
this.setState({products:res.data});
    });
}

// handleSubmit(e) {
//   e.preventDefault();
//   let method = this.state.method;
//   //authService.pay(this.state);
//    axios

//   .post("http://localhost:8085/api/auth/addOrder", this.state )

//   .then((response) => {

//     console.log(response);

//   });

//  }


    render() {
        return (
            <>
            <div className='con'>
               
        <table>
        <tbody>
        
        {
        this.state.products.map(
          product =>
          
          <tr key={product.no}>
            
           <div className='pro'> <img src={this.state.images[this.state.i++].value}></img></div>
           <td> Id : {product.no}</td>
            <td>Product : {product.name}</td>
            <td>Price : {product.price}</td>
            <td><Link to ='/Cart'><button 

            // value={this.props.price}

            //  onClick={()=>this.props.action(this.state.price,this.state.name,this.state.quantity)}>
            >
              Add to cart <img src = {img2} width="10%"></img></button></Link></td>
            <td>
          {/* <button onClick={() => this.props.onIncrement(this.props.cart)}>
            Add (+)
          </button> */}
          {/* <button onClick={() => this.props.onDecrement(this.props.cart)}>
            Remove 
          </button> */}
        </td>
          </tr>
          
        )
}
        </tbody>
        </table>
            </div>
            </>
        );
}
}
export default Product;