import {getSecretNumber, getTiles, handleGuess} from './core';

function changeState(oldState, newState) {
	return Object.assign({}, oldState, newState);
}

const INITIAL_STATE = {
	secretNumber: getSecretNumber(),
	tiles: getTiles(),
	currentGuess: '-',
	guessAccuracy: '-',
	guessesAllowed: 13,
	guessesMade: 0
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
	  case 'GUESS':
	    return changeState(state, handleGuess(state, action.number));
  }
  return state;
}
