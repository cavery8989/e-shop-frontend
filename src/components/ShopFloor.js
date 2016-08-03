import React, { PropTypes } from 'react'
import Item from './Item'

const ShopFloor = React.createClass({
  getInitialState () {
    return {
      stock: [
        {
          book_name: 'Up & Going',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/up%20%26%20going/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 22.50
        },
        {
          book_name: 'Scope & Closures',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/scope%20%26%20closures/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 22.50
        },
        {
          book_name: 'this & Object Prototypes',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/this%20%26%20object%20prototypes/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 22.50
        },
        {
          book_name: 'Types & Grammar',
          img: 'https://slack-imgs.com/?c=1&o1=wi333.he500&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgetify%2FYou-Dont-Know-JS%2Fmaster%2Ftypes%2520%2526%2520grammar%2Fcover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 22.50
        },
        {
          book_name: 'Async & Performance',
          img: 'https://slack-imgs.com/?c=1&o1=wi333.he500&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgetify%2FYou-Dont-Know-JS%2Fmaster%2Fasync%2520%2526%2520performance%2Fcover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 22.50
        },
        {
          book_name: 'ES6 & Beyond',
          img: 'https://slack-imgs.com/?c=1&o1=wi332.he500&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgetify%2FYou-Dont-Know-JS%2Fmaster%2Fes6%2520%2526%2520beyond%2Fcover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 22.50
        }
      ]
    }
  },
  render () {
    let itemNodes = this.state.stock.map((book, index) => {
      return <Item key={index} info={book}/>
    })
    return (
      <div className="shop-floor container">
        <h1>Shop Floor</h1>
        {itemNodes}
      </div>
    )
  }
})

export default ShopFloor
