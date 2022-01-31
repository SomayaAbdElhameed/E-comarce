import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from "./Types";
export function addToCart(productInfo,quantity) {
    return {
        type: ADD_TO_CART,
        productInfo,
        quantity,
       
    }
    
}
export function removefromcart(index) {
    return {
        type :REMOVE_FROM_CART,
         index
    }
    
}
export function clearcart() {
    return {
        type: CLEAR_CART
    
    }
    
}