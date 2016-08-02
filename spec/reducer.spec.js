import { expect } from 'chai';
import appReducer from '../src/reducer/reducer';

describe('#appReducer', () => {
  it('is a function', () => {
    expect(appReducer).to.be.a('function');
  });

  var initialState = { basket: ['hi'] }

  it('should return initialState if action is not recognized', () => {
    var testAction = {type: 'nonExisting', item: 'cheese'}
    expect(appReducer(initialState, testAction) ).to.eql(initialState);
  });

  it('should return initialState if theres no action', () => {
    expect(appReducer(initialState) ).to.eql(initialState);
  });

  // Add item
  it('should add the item passed into ADD_ITEM', () => {
    var testAction = {type: 'ADD_ITEM', item: 'cheese'}
    expect(appReducer(initialState, testAction)).eql({basket: ['hi', 'cheese']});
  });
});
