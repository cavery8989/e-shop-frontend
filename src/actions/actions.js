let actions = {};

import * as types from './types';

actions.addItem = item => {
  return {
    type: types.ADD_ITEM,
    item: item
  }
};

actions.removeItem = itemKey => {
  return {
    type: types.REMOVE_ITEM,
    itemKey: itemKey
  }
};

actions.emptyBasket = () => {
  return {
    type: types.EMPTY_BASKET
  }
};



export default actions;
