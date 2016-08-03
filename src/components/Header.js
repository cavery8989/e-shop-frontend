import React, { PropTypes } from 'react'

import Basket from './Basket'

const Header = React.createClass({
  render () {
    return (
      <div className="header">
        <h1 className="shop-name">Shop Name</h1>
        <Basket />
      </div>
    )
  }
})

export default Header
