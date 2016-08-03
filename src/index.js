import React from 'react'
import ReactDOM from 'react-dom';

import App from './components/App';

import {createStore} from 'redux'
import reducer from './reducer/reducer'

var store = createStore(reducer);

// store.getState
// store.dispatch(action)
// store.subscribe(callback)

console.log(store.getState());





ReactDOM.render(<App store = {store}/>, document.getElementById('app'));

store.subscribe(function () {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
});
