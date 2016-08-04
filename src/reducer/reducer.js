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
          price: 15.50
        },
        {
          book_name: 'Scope & Closures',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/scope%20%26%20closures/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 20.50
        },
        {
          book_name: 'this & Object Prototypes',
          img: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/this%20%26%20object%20prototypes/cover.jpg',
          author: 'Kyle Sympson',
          publisher: "'O'Reilly",
          price: 25.50
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
    };
  let newState;

  action = action || {type: undefined};
  switch (action.type) {

    case types.ADD_ITEM:
      newState = Object.assign({}, initialState, {basket: initialState.basket.concat(action.item)});
      break;

    case types.REMOVE_ITEM:
      var newBasket = initialState.basket.slice();
      // var index = newBasket.indexOf(action.item);

      console.log('basket', newBasket);
      console.log('actionKey === ', action.itemKey);

      var index = _.findIndex(newBasket, {id: action.itemKey});

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
