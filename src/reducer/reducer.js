import * as types from '../actions/types';

const appReducer = (initialState, action) => {
  initialState = initialState || {basket:[]};
  let newState;

  action = action || {type: undefined};

  switch(action.type){
    case types.ADD_ITEM:
      newState = Object.assign({},initialState, { basket: initialState.basket.concat(action.item)});
      break;
    case types.REMOVE_ITEM :
      var newBasket = initialState.basket.slice();
      var index = newBasket.indexOf(action.item);
      newBasket.splice(index, 1);
      newState = Object.assign({}, initialState, {
        basket: newBasket
      });
      break;

    default:
      newState = Object.assign({}, initialState);
    }
    return newState;
  };

export default appReducer;
