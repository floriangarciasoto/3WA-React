import {combineReducers, legacy_createStore as createStore} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';
import knightReducer from "./reducer/knightReducer.js";

const store = createStore(
    combineReducers({
        dragon: dragonReducer,
        knight: knightReducer
    }),
    composeWithDevTools()
)

export default store;