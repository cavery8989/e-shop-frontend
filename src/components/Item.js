import React, { PropTypes } from 'react'

const Item = React.createClass({
  render () {
    return (
      <div className="item">
        <h1>Item name</h1>
        <p className="item-desc">Item description</p>
        <img src="" placeholder='img here'/>
        <a className="button is-success">Add to basket</a>
      </div>
    )
  }
})

export default Item
