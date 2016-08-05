import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import actions from '../actions/actions';

const Item = React.createClass({
  render () {
    var {info} = this.props;
    return (
      <div className="item">

        <div className="card book-card">
          <div className="card-image">
            <figure>
              <img src={info.img} alt=""/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5">{info.book_name}</p>
                <p className="subtitle is-6">{info.publisher}</p>
              </div>
            </div>

            <div className="content btn-and-price">
              <a onClick={this.props.dispatchAddItem.bind(this)} className="button is-success">
                Add to Basket
              </a>
              <h5>£{info.price.toFixed(2)}</h5>
              <br/>
            </div>
          </div>
        </div>


      </div>
    )
  }
});

function mapStateToDispatch (dispatch) {
  return {
    dispatchAddItem: function () {
      var newItem = Object.assign({}, this.props.info, {
        id: Date.now()
      });
      dispatch(actions.addItem(newItem));
    }
  }
}

export default connect(null, mapStateToDispatch)(Item);
