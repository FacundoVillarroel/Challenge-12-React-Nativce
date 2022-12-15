import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer, productReducer, cartReducer, orderReducer, authReducer } from "./reducers";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer,
})

export default createStore(rootReducer,applyMiddleware(thunk))