import React, { PropTypes } from 'react'

import Actions from '../actions/actions'

import {connect} from 'react-redux';

const Basket = React.createClass({
  getInitialState () {
    return {
      sidebarVisible: false
    }
  },
  toggleSidebar () {
    var changed = !this.state.sidebarVisible;
    this.setState({sidebarVisible: changed});
  },

  render () {
    let totalItems = this.props.basket.length;
    let totalPrice = 0;

    totalPrice = this.props.basket.reduce((mem, cv) => {
      return mem + cv.price;
    }, 0);

    var listNodes = this.props.basket.map((item, index) => {
      return (
        <li key={index}><i className="fa fa-times"
                           onClick={this.props.dispatchRemoveItem.bind(null, item.id)}
                           aria-hidden="true"/>{item.book_name + ':  £' + item.price}</li>
      )
    });
    var sidebarVisible = this.state.sidebarVisible ? 'basket-container visible' : 'basket-container hidden';

    return (
      <div className={sidebarVisible}>
        <div onClick={this.toggleSidebar} className="basket-tab">
          <h3>Your basket</h3>
          <br/>
          <p>Total Items: {totalItems} </p>
          <p>Total: £{totalPrice.toFixed(2)}</p>
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        </div>
        <div className="basket-list">
          <h1>Basket</h1>
          <div className="basket-items">
            <ul>
              {listNodes}
            </ul>
          </div>

        </div>
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return{
    basket: state.basket
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    dispatchRemoveItem: (id) => {
      let action = Actions.removeItem(+id);
      dispatch(action);

    }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Basket)
