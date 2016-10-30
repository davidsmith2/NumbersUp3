import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
  	const initialState = Map();
  	const action = {
  		type: 'SET_STATE',
  		state: Map({
  			tiles: List.of(1,2,3),
  			answer: 1,
  			currentGuess: null,
  			guessAccuracy: null,
  			guessesMade: 0,
  			guessesAllowed: 13,
  			guessesRemaining: 13
  		})
  	};
  	const nextState = reducer(initialState, action);
  	expect(nextState).to.equal(fromJS({
  		tiles: [1,2,3],
  		answer: 1,
		currentGuess: null,
		guessAccuracy: null,
		guessesMade: 0,
		guessesAllowed: 13,
		guessesRemaining: 13
  	}));
  });

  it('handles GUESS', () => {
  	const initialState = Map({
  		tiles: List.of(1,2,3),
  		answer: 1,
  		currentGuess: null,
  		guessAccuracy: null,
  		guessesMade: 0,
  		guessesAllowed: 13,
  		guessesRemaining: 13
  	});
  	const action = {
  		type: 'GUESS',
  		number: 2
  	};
  	const nextState = reducer(initialState, action);
  	expect(nextState).to.equal(fromJS({
  		tiles: [1,2,3],
  		answer: 1,
  		currentGuess: 2,
  		guessAccuracy: 'High',
  		guessesMade: 1,
  		guessesAllowed: 13,
  		guessesRemaining: 12
  	}));
  });

});