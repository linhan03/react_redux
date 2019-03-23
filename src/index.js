import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,compose,applyMiddleware}  from 'redux';
import postReducer from './reducers/title';
import reducer from './reducers/counter';
import {get} from 'axios';
import thunk from 'redux-thunk';
//通过combinreReducers吧多个reducer尽心合并
const rootReducers=combineReducers({
    counter:reducer,
    post:postReducer,
})

const store =createStore(
    rootReducers,
    compose(
        applyMiddleware(...[thunk]),//需要使用的中间件数组
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    )


);
// store.subscribe(()=>console.log('State updated!',store.getState()));


const getPostRequest=()=>{
    return get('http://jsonplaceholder.typicode.com/posts')
}

store.dispatch(async (dispatch)=>{
    const res=await getPostRequest();
    console.log(res.data);
    dispatch({
        type:'LOAD_POST',
        payload:res.data
    })
})

const render=()=>{
    ReactDOM.render(<App onIncrement={()=>store.dispatch({type:"INCREMENT",})}
                         onDecrement={()=>store.dispatch({type:"DECREMENT",})}
                         value={store.getState()}/>, document.getElementById('root'));
}

render();

store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
