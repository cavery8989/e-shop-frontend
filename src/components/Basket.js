import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import _ from 'underscore';

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

    var condensedList = this.props.basket.reduce((mem,cur)=>{
      let index =  _.find(mem,(obj) => obj.book_name === cur.book_name);
      if(index){
        index.quantity += 1;
        index.idArr.push(cur.id);
        return mem;
      }else {
        let bookObj = {book_name: cur.book_name, quantity: 1, idArr: [cur.id]};
        mem.push(bookObj);
        return mem;
      }
    },[]);

    console.log('list', condensedList);



    var listNodes = condensedList.map((item, index) => {
      return (
        <li key={index}><i className="fa fa-times"
                           onClick={this.props.dispatchRemoveItem.bind(null, item.idArr[0])}
                           aria-hidden="true"/>{item.book_name + ' X' + item.quantity}</li>
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
          <br/>
          <br/>

          <Link to="/checkout">To Checkout</Link>

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
