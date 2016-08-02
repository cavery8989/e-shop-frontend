import { expect } from 'chai';
import appReducer from '../src/reducer/reducer';

describe('#appReducer', function () {
  it('is a function', function () {
    expect(appReducer).to.be.a('function');
  });

});

