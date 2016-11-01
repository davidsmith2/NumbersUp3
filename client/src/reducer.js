import {setInitialState, handleGuess} from './core';

function changeState(oldState, newState) {
	return Object.assign({}, oldState, newState);
}

export function reducer(state = setInitialState(), action) {
  switch (action.type) {
	  case 'GUESS':
	    return changeState(state, handleGuess(state, action.tile));
	  case 'REPLAY':
	    return changeState(state, setInitialState());
  }
  return state;
}
