import * as types from '../actions/types';
import _ from 'lodash';

const appReducer = (initialState, action) => {
  initialState = initialState || {
      basket: [],
      stock: [
        {
          book_name: 'Up & Going',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/up%20%26%20going/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 3.50
        },
        {
          book_name: 'Scope & Closures',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/scope%20%26%20closures/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 11.67
        },
        {
          book_name: 'this & Object Prototypes',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/this%20%26%20object%20prototypes/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 10.02
        },
        {
          book_name: 'Types & Grammar',
          img: 'https://slack-imgs.com/?c=1&o1=wi333.he500&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgetify%2FYou-Dont-Know-JS%2Fmaster%2Ftypes%2520%2526%2520grammar%2Fcover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 11.51
        },
        {
          book_name: 'Async & Performance',
          img: 'https://slack-imgs.com/?c=1&o1=wi333.he500&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgetify%2FYou-Dont-Know-JS%2Fmaster%2Fasync%2520%2526%2520performance%2Fcover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 10.92
        },
        {
          book_name: 'ES6 & Beyond',
          img: 'https://slack-imgs.com/?c=1&o1=wi332.he500&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgetify%2FYou-Dont-Know-JS%2Fmaster%2Fes6%2520%2526%2520beyond%2Fcover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 12.11
        },
        {
          book_name: 'Even Faster Websites',
          img: 'http://d.gr-assets.com/books/1328834858l/6438581.jpg',
          author: 'Steve Souders',
          publisher: "'O'Reilly",
          price: 24.99
        },
        {
          book_name: 'jQuery Cookbook',
          img: 'https://slack-imgs.com/?c=1&url=http%3A%2F%2Fd.gr-assets.com%2Fbooks%2F1328834694l%2F7107155.jpg',
          author: 'Community Experts',
          publisher: "'O'Reilly",
          price: 24.20
        },
        {
          book_name: 'The Good Parts',
          img: 'http://d.gr-assets.com/books/1328834793l/2998152.jpg',
          author: 'Douglas Crockford',
          publisher: "'O'Reilly",
          price: 24.99
        },
        {
          book_name: 'Patterns',
          img: 'http://d.gr-assets.com/books/1344668503l/9422683.jpg',
          author: 'Stoyan Stefanov',
          publisher: "'O'Reilly",
          price: 19.99
        },
        {
          book_name: 'High Performance',
          img: 'http://d.gr-assets.com/books/1328834985l/7008656.jpg',
          author: 'Nicholas C. Zakas',
          publisher: "'O'Reilly",
          price: 23.49
        },
        {
          book_name: 'The Definitive Guide',
          img: 'http://d.gr-assets.com/books/1328834985l/7008656.jpg',
          author: 'David Flanagan',
          publisher: "'O'Reilly",
          price: 27.49
        }
      ]
    };
  let newState;

  action = action || {type: undefined};
  switch (action.type) {

    case types.ADD_ITEM:
      newState = Object.assign({}, initialState, {basket: initialState.basket.concat(action.item)});
      break;

    case types.REMOVE_ITEM:
      let newBasket = initialState.basket.slice();

      console.log('basket', newBasket);
      console.log('actionKey === ', action.itemKey);

      let index = _.findIndex(newBasket, {id: action.itemKey});

      console.log(index);
      if (index !== -1) {
        console.log('been hit');

        newBasket.splice(index, 1);
      }
      newState = Object.assign({}, initialState, {
        basket: newBasket
      });
      break;

    case types.EMPTY_BASKET:
      newState = Object.assign({}, initialState, {
        basket: []
      });
      break;

    default:
      newState = Object.assign({}, initialState);
  }
  return newState;
};

export default appReducer;
