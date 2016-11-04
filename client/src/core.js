import {extend} from 'lodash';
import 'babel-polyfill';

const MAX_TILES = 25;
const GUESSES_ALLOWED = 13;

const CORRECT_GUESS_DESCRIPTOR = 'Match';
const HIGH_GUESS_DESCRIPTOR = 'High';
const LOW_GUESS_DESCRIPTOR = 'Low';

const CORRECT_GUESS_ICON_NAME = 'check';
const HIGH_GUESS_ICON_NAME = 'arrow_upward';
const LOW_GUESS_ICON_NAME = 'arrow_downward';

const LOSE_DESCRIPTOR = 'Lose';
const WIN_DESCRIPTOR = 'Win';

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

function getTiles(tile, guessAccuracy) {
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

function getSecretNumber() {
	return Math.floor(Math.random() * (MAX_TILES - 1 + 1) + 1);
}

export function getGuessAccuracyIconName(guessAccuracy) {
	switch(guessAccuracy) {
		case LOW_GUESS_DESCRIPTOR:
			return LOW_GUESS_ICON_NAME;
		case HIGH_GUESS_DESCRIPTOR:
			return HIGH_GUESS_ICON_NAME;
		case CORRECT_GUESS_DESCRIPTOR:
			return CORRECT_GUESS_ICON_NAME;
	}
}

export function getInitialState() {
	return 	{
		started: false,
		secretNumber: getSecretNumber(),
		tiles: getTiles(),
		currentGuess: null,
		guessAccuracy: null,
		guessesAllowed: GUESSES_ALLOWED,
		guessesMade: 0,
		result: null,
		guesses: []
	};
}

export function play() {
	return {started: true};
}

export function guess(state, tile) {
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

export function replay() {
	return extend({}, getInitialState(), play());
}
