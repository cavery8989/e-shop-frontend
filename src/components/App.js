import React, { PropTypes } from 'react';

import Header from './Header';
import ShopFloor from './ShopFloor';

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <ShopFloor />
      </div>
    )
  }
})

export default App;
