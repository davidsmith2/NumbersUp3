import {
	getInitialState, 
	play, 
	openSettings, 
	saveSettings, 
	cancelSettings, 
	guess, 
	replay,
	quit
} from './core';

function changeState(oldState, newState) {
	return Object.assign({}, oldState, newState);
}

export function reducer(state = getInitialState(), action) {
  switch (action.type) {
	  case 'LOGIN':
	    return changeState(state, {user: action.user});
	  case 'PLAY':
	    return changeState(state, play());
	  case 'OPEN_SETTINGS':
	    return changeState(state, openSettings());
	  case 'SAVE_SETTINGS':
	    return changeState(state, saveSettings(action.data));
	  case 'CANCEL_SETTINGS':
	    return changeState(state, cancelSettings());
	  case 'GUESS':
	    return changeState(state, guess(state, action.tile));
	  case 'REPLAY':
	    return changeState(state, replay(state));
	  case 'QUIT':
	    return changeState(state, quit(state));
	  case 'SAVE_GAME_BEFORE':
	    return changeState(state, {saving: true});
	  case 'SAVE_GAME_SUCCESS':
	  case 'SAVE_GAME_ERROR':
	    return changeState(state, {saving: false});
  }
  return state;
}
