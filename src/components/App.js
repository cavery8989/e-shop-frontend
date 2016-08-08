import React, { PropTypes } from 'react'
import Header from './Header'
import ShopFloor from './ShopFloor'
import Basket from './Basket'
import Footer from './Footer'

const App = React.createClass({
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
});

export default App;
