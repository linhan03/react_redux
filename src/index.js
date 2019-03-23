import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux'
import {loadPostAction,counterAddAction,counterReduceAction} from './actions';

const render=()=> {
//通过provider吧redux和react连接，store传递到react项目组
    ReactDOM.render(
        <Provider store={store}>
        <App onIncrement={() => store.dispatch(counterAddAction)}
             onDecrement={() => store.dispatch(counterReduceAction)}
             getPost={() => store.dispatch(loadPostAction)}
             value={store.getState()}/>
        </Provider>,
        document.getElementById('root'));

}

render();

// store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
