import React, { PropTypes } from 'react'
// import {createStore} from 'redux'
// import reducer from '../reducer/reducer'

import Header from './Header'
import ShopFloor from './ShopFloor'
import Basket from './Basket'
import Footer from './Footer'

// store.getState
// store.dispatch(action)
// store.subscribe(callback)

// console.log('store', store.getState())

const App = React.createClass({
  componentDidMount () {

  },
  render () {
    return (
      <div className="app">
        <Header />
        <div className="middle-wrapper-content columns">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})

export default App;
