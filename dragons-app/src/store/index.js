import {legacy_createStore as createStore} from "redux";
import postReducer from "./reducer/postReducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    postReducer,
    composeWithDevTools()
)

export default store;