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

actions.empty = () => {
  return {
    type: types.EMPTY_BASKET
  }
};

actions.totalItems = () => {
  return {
    type: types.TOTAL_ITEMS
  }
};

actions.passCart = () => {
  return {
    type: types.PASS_CART
  }
}


export default actions;
