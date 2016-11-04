import {getInitialState, play, guess, replay} from './core';

function changeState(oldState, newState) {
	return Object.assign({}, oldState, newState);
}

export function reducer(state = getInitialState(), action) {
  switch (action.type) {
	  case 'PLAY':
	    return changeState(state, play());
	  case 'GUESS':
	    return changeState(state, guess(state, action.tile));
	  case 'REPLAY':
	    return changeState(state, replay());
  }
  return state;
}
