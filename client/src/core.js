import 'babel-polyfill';

const MAX_TILES = 25;
const LOW_GUESS_DESCRIPTOR = 'Low';
const HIGH_GUESS_DESCRIPTOR = 'High';
const CORRECT_GUESS_DESCRIPTOR = 'Match';

function getGuessAccuracy(number, answer) {
	if (number < answer) {
		return LOW_GUESS_DESCRIPTOR;
	}
	if (number > answer) {
		return HIGH_GUESS_DESCRIPTOR;
	}
	return CORRECT_GUESS_DESCRIPTOR;
}

export function getSecretNumber() {
	return Math.floor(Math.random() * (MAX_TILES - 1 + 1) + 1);
}

export function getTiles() {
	return Array.from(Array(MAX_TILES)).map((e,i) => i + 1);
}

export function handleGuess(state, number) {
	let guessesMade = state.guessesMade;
	return {
		currentGuess: number,
		guessAccuracy: getGuessAccuracy(number, state.secretNumber),
		guessesMade: guessesMade + 1
	};
}
