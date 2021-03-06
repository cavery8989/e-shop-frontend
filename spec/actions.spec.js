import { expect } from 'chai';
import actions from '../src/actions/actions';

describe('addItem',() => {
  it('is a function',() => {
    expect(actions.addItem).to.be.a('function');
  });
  it('takes one arguemnt',() => {
    expect(actions.addItem.length).to.equal(1);
  });
  it('returns the expected object',() => {
    expect(actions.addItem('hat')).to.eql({type: 'ADD_ITEM', item: 'hat'})
  });
});
describe('removeItem',() => {
  it('is a function',() => {
    expect(actions.removeItem).to.be.a('function');
  });
  it('takes one arguemnt',() => {
    expect(actions.removeItem.length).to.equal(1);
  });
  it('returns the expected object',() => {
    expect(actions.removeItem('hat')).to.eql({type: 'REMOVE_ITEM', itemKey: 'hat'})
  });
});

describe('emptyBasket',() => {
  it('is a function',() => {
    expect(actions.emptyBasket).to.be.a('function');
  });
  it('takes zero arguemnt',() => {
    expect(actions.emptyBasket.length).to.equal(0);
  });
  it('returns the expected object',() => {
    expect(actions.emptyBasket()).to.eql({type: 'EMPTY_BASKET'})
  });
});

