import React, { PropTypes } from 'react';

import Header from './Header';
import ShopFloor from './ShopFloor';

const App = React.createClass({
  render () {
    return (
      <div className="app">

        <Header />
        <div className=" shop-floor-container columns">
          <ShopFloor />
        </div>







      </div>
    )
  }
})

export default App;
