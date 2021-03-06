import {expect} from 'chai';
import appReducer from '../src/reducer/reducer';
import DeepFreeze from 'deep-freeze';

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
      expect(appReducer(null, testAction).basket).to.eql(['cheese']);
    });
  });

  describe('reducer with REMOVE_ITEM', () => {
    var initialState = {basket:[{id: 'hat'}, {id: 'cheese'}, {id:'pie'}]};
    var initialState2 = {basket:[{author: "Kyle Sympson", book_name: "Scope & Closures", id: 1470310330511}]};

    var testAction = {type: 'REMOVE_ITEM', itemKey: 'cheese'};
    var testAction2 = {type: 'REMOVE_ITEM', itemKey: 'potato'};
    var testAction3 = {type: 'REMOVE_ITEM', itemKey: 1470310330511};


    it('returns a new state with the item in the action removed from the array assigned to basket',() => {
      expect(appReducer(initialState, testAction)).to.eql({basket:[{id:'hat'}, {id: 'pie'}]});
    });
    it('returns the initial state if item is not a part of the array', () => {
      expect(appReducer(initialState, testAction2)).to.eql({basket:[{id: 'hat'}, {id: 'cheese'}, {id: 'pie'}]})
    });
    it('it returns the the expected result with', () =>{
      expect(appReducer(initialState2, testAction3)).to.eql({basket: []});
    });

  });
  
  describe('reducer with EMPTY_BASKET', () => {
    var initialState = {basket:['hat', 'cheese', 'pie']};
    var testAction = {type: 'EMPTY_BASKET'};
    it('replaces old basket with empty array', () => {
      expect(appReducer(initialState, testAction)).to.eql({basket: []});
    })

  });

  describe('deepFreeze', function () {

    it('is a test ', function () {
        var initialState = DeepFreeze({basket:['hat', 'cheese', 'pie']});
        var testAction = {type: 'ADD_ITEM', item: 'people'};

        expect(appReducer(initialState,testAction));
      });





  });

});
