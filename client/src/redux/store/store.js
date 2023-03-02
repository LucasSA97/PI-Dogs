import { createStore, applyMiddleware, compose} from "redux";
//import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducer/index.js";

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // esta línea es para poder hacer peticiones a un server
);

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;





