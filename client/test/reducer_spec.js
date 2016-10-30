import {expect} from 'chai';

import {reducer} from '../src/reducer';

describe('reducer', () => {

  it('handles GUESS', () => {
  	expect(reducer({
      currentGuess: '-',
      guessAccuracy: '-',
      guessesMade: 0,
      secretNumber: 1
    }, {
      type: 'GUESS',
      number: 2
    })).to.equal({
      currentGuess: 2,
      guessAccuracy: 'High',
      guessesMade: 1,
      secretNumber: 1
  	});
  });

});