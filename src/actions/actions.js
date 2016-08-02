let actions = {};

actions.addItem = item => {
  return{
    type: 'ADD_ITEM',
    item: item
  }
};


export default actions;

