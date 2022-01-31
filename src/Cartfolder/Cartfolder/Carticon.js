import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function Carticon(props) {
    return (
        <div>
          <Link to="/Cart" className="cartLink">
          <span>{props.totalQuantity}</span>
          <i class=" down fa fa-cart-arrow-down" aria-hidden="true"></i>
          </Link>
        </div>
    
    )
}
const mapStateToProps =(state) =>{
    return {
        totalQuantity:state.cart.reduce((total,item)=> total + parseInt(item.quantity),0)
    }
}
export default connect(mapStateToProps)(Carticon)
