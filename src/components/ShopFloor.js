import React, { PropTypes } from 'react'
import Item from './Item'

const ShopFloor = React.createClass({
  render () {
    return (
      <div className=" shop-floor container column is-12">
        <h1>Shop Floor</h1>
        <Item />
      </div>
    )
  }
})

export default ShopFloor
