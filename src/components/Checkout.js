import React, {PropTypes} from 'react';
import {Link} from 'react-router'

import {connect} from 'react-redux';

 const Checkout = React.createClass({
  render () {

    let itemNodes = this.props.basket.map(item => (<li>{item.book_name}</li>));

    return(
      <div className="checkout-container">
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
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


        
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

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

const mapDispatchToProps = (dispatch) => {
  return{
    remove: function () {

    },
    add: function () {

    }
  }
};


const mapStateToProps = (state) =>{
  return({
    basket: state.basket
  })
};

export default connect(mapStateToProps)(Checkout)


// <Link to="/shop"><i className="fa fa-shopping-cart" aria-hidden="true"></i>  Keep shopping</Link>
// <div className="columns">
//
//     <div className="column is-8 left">
//       <h1>Shopping bag</h1>
//     </div>
//     <div className="column is-4 right">
//       <a className="button is-success">Pay securely</a>
//     </div>
//   </div>
//
//
// <div className="columns">
//   <div className="column is-8 left">
//     <p>Items here</p>
//   </div>
//   <div className="column is-4 right">
//     <p>price herejjjjjjjjjjjjjjjjjj jjjjjjjjjjj jjjjjjjjjjjj jjjjjjjjjjjjjjj jjjjjjjjjjj j</p>
//   </div>
// </div>
