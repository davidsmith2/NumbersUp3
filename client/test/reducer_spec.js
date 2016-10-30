import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {mount} from 'enzyme';

import {reducer} from '../src/reducer';

describe('reducer', () => {

  it('handles GUESS', () => {
  	const initialState = {
  		tiles: [1,2,3],
  		secretNumber: 1,
  		currentGuess: '-',
  		guessAccuracy: '-',
      guessesAllowed: 13,
  		guessesMade: 0
  	};
  	const action = {
  		type: 'GUESS',
  		number: 2
  	};
  	const nextState = reducer(initialState, action);
  	expect(nextState).to.equal({
      tiles: [1,2,3],
  		secretNumber: 1,
  		currentGuess: 2,
  		guessAccuracy: 'High',
      guessesAllowed: 13,
  		guessesMade: 1
  	});
  });

});