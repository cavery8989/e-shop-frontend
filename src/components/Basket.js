import React, { PropTypes } from 'react'

const Basket = React.createClass({
  render () {
    return (
      <div className="basket">
        <h3>Your basket</h3>
        <br/>
        <p>Total Items: </p>
        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
      </div>
    )
  }
})

export default Basket
