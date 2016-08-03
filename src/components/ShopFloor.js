import React, { PropTypes } from 'react'
import Item from './Item'

const ShopFloor = React.createClass({
  render () {
    return (
      <div className="shop-floor container">
        <h1>Shop Floor</h1>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    )
  }
})

export default ShopFloor
