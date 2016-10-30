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
		guessesRemaining: state.guessesRemaining
	};
}

export const AppContainer = connect(
	mapStateToProps
)(App);
