import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import storeFactory  from './store'
import initialStateData  from './initialState'
import { createStore , combineReducers } from 'redux'
import { colors , sort } from './store/reducers'

console.log('initialStateData ' , initialStateData ); 

const store =  createStore(combineReducers({ colors , sort }), initialStateData );

//const store = storeFactory(  initialStateData )
console.log("store is " , store.getState() )

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
