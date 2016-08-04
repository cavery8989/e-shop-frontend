import * as types from '../actions/types';
import _ from 'lodash';

const appReducer = (initialState, action) => {
  initialState = initialState || {basket:[]};
  let newState;

  action = action || {type: undefined};
  switch(action.type){

    case types.ADD_ITEM:
      newState = Object.assign({},initialState, { basket: initialState.basket.concat(action.item)});
      break;

    case types.REMOVE_ITEM:
      var newBasket = initialState.basket.slice();
      // var index = newBasket.indexOf(action.item);

      console.log('basket',newBasket);
      console.log('actionKey === ',action.itemKey);

      var index = _.findIndex(newBasket,{id: action.itemKey});

      console.log(index)
      if(index !== -1){
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
