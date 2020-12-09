// src/store/index.js
import { createStore, combineReducers } from "redux";
import userReducer from "./user/reducer";
import pizzaReducer from "./pizzas/reducer";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
  user: userReducer,
  pizzas: pizzaReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
