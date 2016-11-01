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

export function getTiles(tile, guessAccuracy) {
	let thisTile;
	if (tile && guessAccuracy) {
		thisTile = this.tiles.find((obj) => obj.number === tile.number);
		thisTile.guessAccuracy = guessAccuracy;
		return this.tiles;
	} else {
		return Array.from(Array(MAX_TILES)).map((e,i) => {
			return {number: i + 1, guessAccuracy: false};
		});
	}
}

export function getSecretNumber() {
	return Math.floor(Math.random() * (MAX_TILES - 1 + 1) + 1);
}

export function handleGuess(state, tile) {
	const guessAccuracy = getGuessAccuracy.call(state, tile.number);
	const guessesMade = getGuessesMade.call(state);
	const guesses = getGuesses.call(state, tile.number, guessAccuracy);
	const result = getResult.call(state, guessAccuracy, guessesMade);
	const tiles = getTiles.call(state, tile, guessAccuracy);
	let nextState = {
		currentGuess: tile.number,
		guessAccuracy: guessAccuracy,
		guessesMade: guessesMade,
		guesses: guesses,
		result: result,
		tiles: tiles
	};
	return nextState;
}

export function setInitialState() {
	return 	{
		secretNumber: getSecretNumber(),
		tiles: getTiles(),
		currentGuess: null,
		guessAccuracy: null,
		guessesAllowed: 13,
		guessesMade: 0,
		result: null,
		guesses: []
	};
}
