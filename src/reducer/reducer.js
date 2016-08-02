import * as types from '../actions/types';

const appReducer = (initialState, action) => {
  initialState = initialState || {basket:[]};

  let newState;

  switch(action.type){
    case types.ADD_ITEM :
      newState = Object.assign({},initialState, { basket: initialState.basket.concat(action.item)});
      break;
  }


};

export default appReducer;