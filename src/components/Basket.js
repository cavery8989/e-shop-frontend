import React, { PropTypes } from 'react'

const Basket = React.createClass({
  render () {

    let state = this.props.store.getState();
    let totalItems = state.basket.length;

    return (



      <div className="basket">
        <h3>Your basket</h3>
        <br/>
        <p>Total Items: {totalItems} </p>
        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
      </div>
    )
  }
})

export default Basket
