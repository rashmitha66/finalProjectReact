import React, { Component } from "react";
import Product from "./Product";
import Paytm from "./paytm";
import {Link} from 'react-router-dom';
import m1 from '../images/tv.jfif';
export default class home extends React.Component
{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //                 products: [
    //                    { id:Product.products.name
    //                     //  ,name:products.name, qty: 0, price: products.price, total: 0 },
    //                    },
    //                 ],
    //               };
    //             //   console.log(this.state);

    // }   
    increaseItem = (cart) => {

                cart.qty = cart.qty + 1;
                Product.total = cart.qty * Product.price;
                this.setState({ Product: this.state.Product });
              };
            
              decreaseItem = (cart) => {
                if (cart.qty > 0) {
                  cart.qty = cart.qty - 1;
                  Product.total = cart.qty * Product.price;
                  this.setState({ Product: this.state.Product });
                }
              }; 
        render(){
         return (
            <div>
            <h2 style={{margin:20}}>Item is added to cart, you can do payment by clicking on "payhere" button down !</h2>
           <> <div className='con'>
               
        <table>
        <tbody>   
          <tr>    
           <div className='pro'> <img src={m1}></img></div>
           <td> Id : 1</td>
            <td>Product : Television</td>
            <td>Price : 10000</td>
          </tr>
        </tbody>
        </table>
            </div>
            </>
            <Link to ='/paytm'> <button style={{margin:20}}>Pay Here</button> </Link>
            </div>
       
         )
          }

//     state = {
//         Product: [
//            { id:1 ,name:Product.name, qty: 0, price: Product.price, total: 0 },
//         ],
//       };
    
//       increaseItem = (cart) => {

//         cart.qty = cart.qty + 1;
//         Product.total = cart.qty * Product.price;
//         this.setState({ Product: this.state.Product });
//       };
    
//       decreaseItem = (cart) => {
//         if (cart.qty > 0) {
//           cart.qty = cart.qty - 1;
//           Product.total = cart.qty * Product.price;
//           this.setState({ Product: this.state.Product });
//         }
//       };
    
//       removeItems = () => {
//         for (var key in this.state.Product) {
//           this.state.Product[key].qty = 0;
//           this.state.Product[key].total = 0;
//         }
    
//         this.setState({Product: this.state.Product });
//       };
// render(){
// return (
//     <React.Fragment>
//     <h1>Cart Example in React JS</h1>
//     <button onClick={this.removeItems}>Remove All Items</button>
//     <table border="1">
//       <tr>
//         <th>Item</th>
//         <th>Price</th>
//         <th>Quantity</th>
//         <th>Total</th>
//       </tr>
//       {this.state.Product.map((cart) => (
//         <Product
//           cart={cart}
//           onIncrement={this.increaseItem}
//           onDecrement={this.decreaseItem}
//         />
//       ))}
//       <tr>
//         <th colSpan="2">Total Amount</th>
//         <th>
//           {this.state.Product.reduce(
//             (total, cart) => total + cart.qty * cart.price,
//             0
//           )}
//         </th>
//         <th>Quantity</th>
//         <th>
//           {this.state.Product.reduce(
//             (total, cart) => total + cart.qty,
//             0
//           )}
//         </th>
//       </tr>
//     </table>
//   </React.Fragment>
// )
// }
}