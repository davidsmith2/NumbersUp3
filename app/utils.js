import {
	login,
	play,
	openSettings,
	saveSettings,
	cancelSettings,
	guess,
	replay,
	quit
} from './actions';
import {saveGame} from './core';

export function mapStateToProps(state) {
	return {
		user: state.user,
		dialog: state.dialog,
		secretNumber: state.secretNumber,
		result: state.result,
		tiles: state.tiles,
		currentGuess: state.currentGuess,
		guessAccuracy: state.guessAccuracy,
		guessesAllowed: state.guessesAllowed,
		guessesMade: state.guessesMade,
		guessesRemaining: state.guessesRemaining,
		guesses: state.guesses,
		saving: state.saving
	};
}

export const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => {
			dispatch(login(user))
		},
		play: () => {
			dispatch(play())
		},
		openSettings: () => {
			dispatch(openSettings())
		},
		saveSettings: (settings) => {
			dispatch(saveSettings(settings))
		},
		cancelSettings: () => {
			dispatch(cancelSettings())
		},
		guess: (tile) => {
			dispatch(guess(tile));
		},
		replay: () => {
			dispatch(replay());
		},
		quit: () => {
			dispatch(quit());
		},
		saveGame: (data, url) => {
			dispatch(saveGame(data, url));
		}
	};
};