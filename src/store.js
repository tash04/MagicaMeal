import { legacy_createStore as createStore } from 'redux';
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllEdiblesReducer } from "./reducers/edibleReducers";
import { cartReducer } from './reducers/cartReducer';

const finalReducer = combineReducers({
  getAllEdiblesReducer :  getAllEdiblesReducer,
  cartReducer : cartReducer
})

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState ={
  cartItems: cartItems
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store
