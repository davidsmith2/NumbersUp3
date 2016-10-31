import 'babel-polyfill';

const MAX_TILES = 25;
const LOW_GUESS_DESCRIPTOR = 'Low';
const HIGH_GUESS_DESCRIPTOR = 'High';
const CORRECT_GUESS_DESCRIPTOR = 'Match';
const WIN_DESCRIPTOR = 'Win';
const LOSE_DESCRIPTOR = 'Lose';

function getGuessAccuracy(number) {
	if (number < this.secretNumber) {
		return LOW_GUESS_DESCRIPTOR;
	}
	if (number > this.secretNumber) {
		return HIGH_GUESS_DESCRIPTOR;
	}
	return CORRECT_GUESS_DESCRIPTOR;
}

function getGuessesMade() {
	return this.guessesMade + 1;
}

function getGuesses(number, guessAccuracy) {
	this.guesses.push({
		number: number,
		guessAccuracy: guessAccuracy
	});
	return this.guesses;
}

function getResult(guessAccuracy, guessesMade) {
	if (guessAccuracy === CORRECT_GUESS_DESCRIPTOR) {
		return WIN_DESCRIPTOR;
	}
	if (guessesMade === this.guessesAllowed) {
		return LOSE_DESCRIPTOR;
	}
	return false;
}

export function getSecretNumber() {
	return Math.floor(Math.random() * (MAX_TILES - 1 + 1) + 1);
}

export function getTiles() {
	return Array.from(Array(MAX_TILES)).map((e,i) => i + 1);
}

export function handleGuess(state, number) {
	const guessAccuracy = getGuessAccuracy.call(state, number);
	const guessesMade = getGuessesMade.call(state);
	const guesses = getGuesses.call(state, number, guessAccuracy);
	const result = getResult.call(state, guessAccuracy, guessesMade);
	let nextState = {
		currentGuess: number,
		guessAccuracy: guessAccuracy,
		guessesMade: guessesMade,
		guesses: guesses,
		result: result
	};
	return nextState;
}
