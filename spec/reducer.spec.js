import {expect} from 'chai';
import appReducer from '../src/reducer/reducer';

describe('#appReducer', () => {
  it('is a function', () => {
    expect(appReducer).to.be.a('function');
  });

  var initialState = {basket: ['hi']}

  it('should return initialState if action is not recognized', () => {
    var testAction = {type: 'nonExisting', item: 'cheese'}
    expect(appReducer(initialState, testAction)).to.eql(initialState);
  });

  it('should return initialState if theres no action', () => {
    expect(appReducer(initialState)).to.eql(initialState);
  });

  describe('reducer with ADD_ITEM action', () => {
    var testAction = {type: 'ADD_ITEM', item: 'cheese'};

    it('should add the item passed into ADD_ITEM', () => {
      expect(appReducer(initialState, testAction)).eql({basket: ['hi', 'cheese']});
    });
    it('should return a new state with the item found in in the action assigned to the array found in basket', () => {
      expect(appReducer(null, testAction)).to.eql({basket: ['cheese']});
    });
  });

  describe('reducer with REMOVE_ITEM', () => {
    var initialState = {basket:['hat', 'cheese', 'pie']};
    var testAction = {type: 'REMOVE_ITEM', item: 'cheese'};
    var testAction2 = {type: 'REMOVE_ITEM', item: 'potato'};

    it('returns a new state with the item in the action removed from the array assigned to basket',() => {
      expect(appReducer(initialState, testAction)).to.eql({basket:['hat', 'pie']});
    });
    it('returns the initial state if item is not a part of the array', () => {
      expect(appReducer(initialState, testAction2)).to.eql({basket:['hat', 'cheese', 'pie']})
    });
  });
  
  describe('reducer with EMPTY_BASKET', () => {
    var initialState = {basket:['hat', 'cheese', 'pie']};
    var testAction = {type: 'EMPTY_BASKET'};
    it('replaces old basket with empty array', () => {
      expect(appReducer(initialState, testAction)).to.eql({basket: []});
    })

  });

});
