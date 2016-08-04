import React from 'react'
import ReactDOM from 'react-dom';

import App from './components/App';

import {createStore} from 'redux'
import reducer from './reducer/reducer'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'



var store = createStore(reducer);

ReactDOM.render(<App store = {store}/>, document.getElementById('app'));

store.subscribe(function () {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
});
