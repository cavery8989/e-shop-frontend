import React, { PropTypes } from 'react';
// import {createStore} from 'redux'
// import reducer from '../reducer/reducer'

import Header from './Header';
import ShopFloor from './ShopFloor';
import Basket from './Basket'



// store.getState
// store.dispatch(action)
// store.subscribe(callback)

// console.log('store', store.getState())

const App = React.createClass({

  render () {
    return (
      <div className="app">
        <Basket store={this.props.store}/>
        <Header />
        <div className="middle-wrapper-content columns">
          <ShopFloor store={this.props.store}/>
        </div>

      </div>
    )
  }
})

export default App;
