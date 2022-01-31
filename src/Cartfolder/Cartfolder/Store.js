import CartReducer from "./Reducer"
import {createStore} from "redux";  

const initialState ={
 cart:[]
}

const store =createStore(CartReducer,initialState);
export default store;

