import {connect} from 'react-redux';

import {App} from './components/App';

function mapStateToProps(state) {
	return {
		secretNumber: state.secretNumber,
		tiles: state.tiles,
		guessesAllowed: state.guessesAllowed,
		currentGuess: state.currentGuess,
		guessAccuracy: state.guessAccuracy,
		guessesMade: state.guessesMade,
		guessesRemaining: state.guessesRemaining,
		guesses: state.guesses,
		result: state.result,
		started: state.started
	};
}

export const AppContainer = connect(
	mapStateToProps
)(App);
