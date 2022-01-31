import React from "react";
import { connect } from "react-redux";
import Cartitem from "./Cartitem";
import { clearcart } from "./action/Action";
import './action/Cartstyl.css';

import { Container,Row} from "reactstrap";


function Cart({ cart, total ,totalQuantity}) {
 
  return (
    <div className="cartstyl">
    <Container  className="cartall ">
      
      <div >
     
  <h2>Cart </h2>
   
        <p>Total items : {totalQuantity} </p>
        <p>Total Price : {total} $ </p>
      
      <Row>
       {cart.map((item) => (
              <Cartitem key={item.id} item={item} />
        ))}


           </Row>
    


      </div>
  
 </Container>
 </div>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    totalQuantity:state.cart.reduce((total,item)=> total + parseInt(item.quantity),0),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearcart: () => dispatch(clearcart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);