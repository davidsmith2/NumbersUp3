import {connect} from 'react-redux';

import {App} from './components/App';

function mapStateToProps(state) {
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

export const AppContainer = connect(
	mapStateToProps
)(App);
