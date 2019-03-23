import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {loadPostAction,counterAddAction,counterReduceAction} from './actions';

const render=()=> {

    ReactDOM.render(<App onIncrement={() => store.dispatch(counterAddAction)}
                         onDecrement={() => store.dispatch(counterReduceAction)}
                         getPost={() => store.dispatch(loadPostAction)}
                         value={store.getState()}/>, document.getElementById('root'));

}

render();

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
