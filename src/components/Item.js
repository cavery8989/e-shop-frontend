import React, { PropTypes } from 'react'

const Item = React.createClass({
  render () {
    var info = this.props.info;
    return (
      <div className="item">

        <div className="card">
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

            <div className="content">
              Lorem Ipsum Item descripto chris computo will.
              <br/>
                <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>


      </div>
    )
  }
})

export default Item
