import React, { PropTypes } from 'react';

import Header from './Header';
import ShopFloor from './ShopFloor';
import Basket from './Basket'

const App = React.createClass({
  render () {
    return (
      <div className="app">
        <Basket/>
        <Header />
        <div className="middle-wrapper-content columns">
          <ShopFloor />
        </div>

      </div>
    )
  }
})

export default App;
