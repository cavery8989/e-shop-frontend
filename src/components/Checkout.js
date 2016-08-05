import React, {PropTypes} from 'react';
import {Link} from 'react-router'

 export default React.createClass({
  render () {
    return(
      <div className="checkout-page container">
        <div className="checkout-container">
          <h1>Hi I am the Checkout!!!</h1>
          <Link to="/shop">Keep shopping!!!!!!!!!!!!!</Link>
        </div>

      </div>
    )
  }
});

