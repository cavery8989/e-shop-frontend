let actions = {};

import * as types from './types';

actions.addItem = item => {
  return {
    type: types.ADD_ITEM,
    item: item
  }
};

actions.removeItem = item => {
  return {
    type: types.REMOVE_ITEM,
    item: item
  }
};

actions.emptyBasket = () => {
  return {
    type: types.EMPTY_BASKET
  }
};



export default actions;
