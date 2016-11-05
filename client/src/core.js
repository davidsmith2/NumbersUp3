import {extend} from 'lodash';
import 'babel-polyfill';

const MAX_TILES = 100;
const GUESSES_ALLOWED = 13;

const CORRECT_GUESS_DESCRIPTOR = 'Match';
const HIGH_GUESS_DESCRIPTOR = 'High';
const LOW_GUESS_DESCRIPTOR = 'Low';

const CORRECT_GUESS_ICON_NAME = 'check';
const HIGH_GUESS_ICON_NAME = 'arrow_upward';
const LOW_GUESS_ICON_NAME = 'arrow_downward';

const LOSE_DESCRIPTOR = 'Lose';
const WIN_DESCRIPTOR = 'Win';

export const SPLASH_DIALOG_TITLE = 'Numbers Up';
export const SPLASH_DIALOG_DESCRIPTION = 'Try to guess the secret number before you run out of turns.';
export const SPLASH_DIALOG_PLAY_BUTTON_LABEL = 'Play';
export const SPLASH_DIALOG_SETTINGS_BUTTON_LABEL = 'Settings';

export const SETTINGS_DIALOG_TITLE = 'Settings';
export const SETTINGS_DIALOG_SAVE_BUTTON_LABEL = 'Save';
export const SETTINGS_DIALOG_CANCEL_BUTTON_LABEL = 'Cancel';

export const RESULT_DIALOG_TITLE = (result) => `You ${result}!`;
export const RESULT_DIALOG_DESCRIPTION = (secretNumber) => `The secret number was ${secretNumber}.`;
export const RESULT_DIALOG_REPLAY_BUTTON_LABEL = 'Replay';
export const RESULT_DIALOG_QUIT_BUTTON_LABEL = 'Quit';

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
		return {
			result: WIN_DESCRIPTOR,
			dialog: 'result'
		};
	}
	if (guessesMade === this.guessesAllowed) {
		return {
			result: LOSE_DESCRIPTOR,
			dialog: 'result'
		};
	}
	return {
		result: false,
		dialog: false
	};
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
		dialog: 'splash',
		settings: false,
		secretNumber: getSecretNumber(),
		result: null,
		tiles: getTiles(),
		currentGuess: null,
		guessAccuracy: null,
		guessesAllowed: GUESSES_ALLOWED,
		guessesMade: 0,
		guesses: []
	};
}

export function play() {
	return {
		dialog: false
	};
}

export function openSettings() {
	return {
		dialog: 'settings'
	};
}

export function saveSettings(guessesAllowed) {
	return {
		guessesAllowed: guessesAllowed, 
		dialog: 'splash'
	};
}

export function cancelSettings() {
	return {
		dialog: 'splash'
	};
}

export function guess(state, tile) {
	const guessAccuracy = getGuessAccuracy.call(state, tile.number);
	const guessesMade = getGuessesMade.call(state);
	const guesses = getGuesses.call(state, tile.number, guessAccuracy);
	const result = getResult.call(state, guessAccuracy, guessesMade);
	const tiles = getTiles.call(state, tile, guessAccuracy);
	let nextState = {
		tiles: tiles,
		currentGuess: tile.number,
		guessAccuracy: guessAccuracy,
		guessesMade: guessesMade,
		guesses: guesses
	};
	return extend({}, nextState, result);
}

export function replay(guessesAllowed) {
	return extend({}, getInitialState(), {
		guessesAllowed: guessesAllowed, 
		dialog: false
	});
}

export function quit(guessesAllowed) {
	return extend({}, getInitialState(), {
		guessesAllowed: guessesAllowed
	});
}
