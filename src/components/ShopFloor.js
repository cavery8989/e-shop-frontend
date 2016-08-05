import React, { PropTypes } from 'react'
import Item from './Item'
import Basket from './Basket'
import {connect} from 'react-redux';

const ShopFloor = React.createClass({
  render () {
    let itemNodes = this.props.stock.map((book, index) => {
      return <Item key={index} info={book} />
    });
    return (
      <div className="shop-floor container">
        <Basket store={this.props.store}/>
        {itemNodes}
      </div>
    )
  }
});

function mapStateToProps (state) {
  return {
    stock: state.stock
  }
}

export default connect(mapStateToProps)(ShopFloor);
