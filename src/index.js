import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory, IndexRedirect} from 'react-router';

import App from './components/App';
import ShopFloor from './components/ShopFloor'

import {createStore} from 'redux'
import reducer from './reducer/reducer'

var store = createStore(reducer);



ReactDOM.render(

  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>

        <IndexRedirect to="/shop"/>
        <Route path='/shop' component={ShopFloor}/>


      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

//
// <Provider store={store}>
//   <App />
// </Provider>,