
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