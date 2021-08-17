import counter from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    counter: counter,
    loggedReducer: loggedReducer,
})

export default allReducers