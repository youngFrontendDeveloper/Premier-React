import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { modalReducer } from "./modal/modalReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(
  combineReducers({
    modalReducer: modalReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)