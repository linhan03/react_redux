import {combineReducers} from "redux";
import counterReducer from "./counter";
import postReducer from "./post";

//通过combinreReducers吧多个reducer尽心合并
const rootReducers=combineReducers({
    counter:counterReducer,
    post:postReducer,
})

export default rootReducers;