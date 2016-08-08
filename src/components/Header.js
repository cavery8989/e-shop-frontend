import React, { PropTypes } from 'react'
import Basket from './Basket'

const Header = React.createClass({
  render () {
    return (
      <div className="header">
        <h1>Coderbooks</h1>
        <h3>Take your skills to the next level</h3>
      </div>
    )
  }
})

export default Header
