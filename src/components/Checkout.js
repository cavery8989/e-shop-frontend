import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import helpers from '../helpers/helpers'
import Actions from '../actions/actions'
import {connect} from 'react-redux';

 const Checkout = React.createClass({
  render () {
    let condensedBasket = helpers.condenseBasket(this.props.basket);
    let itemNodes = condensedBasket.map((item,index) => (
      <div key={index} className="columns">
        <div className="column is-1">
          <img src={item.img}/>
        </div>
        <div className="column is-3">
          {item.book_name} x {item.quantity}
        </div>
        <div className="column is-2">
          £{(item.price * item.quantity).toFixed(2)}
        </div>
        <div className="column is-6">
          <a onClick={this.props.dispatchRemoveItem.bind(null,item.idArr[0])}>Remove</a>
        </div>
      </div>));

    return(
      <div className="checkout-container">
        <div className="back-to-shop">
          <Link to="/shop">
            <button className="back-to-shop">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
              Keep Shopping
            </button>
          </Link>
        </div>
        <div className="columns">
          <div className="column">
            <h1> Item Description </h1>
          </div>
          <div className="column">
            <h1> Price </h1>
          </div>
        </div>
        <div className="checkout-item-list">
          <ul>
            {itemNodes}
          </ul>
          <button onClick={this.props.dispatchEmptyBasket}>Empty Basket</button>

        </div>
        <p className="lorem-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <div className="payment-options">
          <i className="fa fa-cc-visa" aria-hidden="true"></i>
          <i className="fa fa-cc-amex" aria-hidden="true"></i>
          <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
          <i className="fa fa-cc-paypal" aria-hidden="true"></i>
          <i className="fa fa-cc-jcb" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
});

const mapStateToProps = (state) =>{
  return({
    basket: state.basket
  })
};

const mapDispatchToProps = (dispatch) => {
  return{
    dispatchRemoveItem: (id) => {
      let action = Actions.removeItem(id);
      dispatch(action);

    },
    dispatchEmptyBasket: () => {
      let action = Actions.emptyBasket();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
