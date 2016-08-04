import React, { PropTypes } from 'react'

import Actions from '../actions/actions'

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
  removeItem (e) {
    var target = e.target.dataset.itemid;

    console.log(typeof target)

    var action = Actions.removeItem(parseInt(target));
    this.props.store.dispatch(action);
  },
  render () {

    let state = this.props.store.getState();
    let totalItems = state.basket.length;
    let totalPrice = 0;
    let price = state && state.basket[0] && state.basket[0].price;

    if(price) {
      totalPrice = state.basket.reduce((mem, cv) => {
        return mem + cv.price;
      }, 0);

      var listNodes = state.basket.map((item, index) => {
        return (
          <li key={index}><i className="fa fa-times"
                             data-itemId={item.id}
                             onClick={this.removeItem}
                             aria-hidden="true"/>{item.book_name}</li>
        )
      });
    }
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
})

export default Basket
