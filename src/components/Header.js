import React, { PropTypes } from 'react'

import Basket from './Basket'

const Header = React.createClass({
  render () {
    return (
      <div className="header">
        <Basket />
      </div>
    )
  }
})

export default Header
