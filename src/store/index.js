import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer, productReducer, cartReducer, orderReducer } from "./reducers";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
})

export default createStore(rootReducer,applyMiddleware(thunk))