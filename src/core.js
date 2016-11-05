import {extend} from 'lodash';
import 'babel-polyfill';

const DEFAULT_TILES = 25;
const DEFAULT_GUESSES_ALLOWED = 13;

const CORRECT_GUESS_DESCRIPTOR = 'Match';
const HIGH_GUESS_DESCRIPTOR = 'High';
const LOW_GUESS_DESCRIPTOR = 'Low';

const CORRECT_GUESS_ICON_NAME = 'check';
const HIGH_GUESS_ICON_NAME = 'arrow_upward';
const LOW_GUESS_ICON_NAME = 'arrow_downward';

const LOSE_DESCRIPTOR = 'Lose';
const WIN_DESCRIPTOR = 'Win';

const SPLASH_DIALOG_NAME = 'splash';
const SETTINGS_DIALOG_NAME = 'settings';
const RESULT_DIALOG_NAME = 'result';

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

function getGuessAccuracy(currentGuess) {
	if (currentGuess < this.secretNumber) {
		return LOW_GUESS_DESCRIPTOR;
	}
	if (currentGuess > this.secretNumber) {
		return HIGH_GUESS_DESCRIPTOR;
	}
	return CORRECT_GUESS_DESCRIPTOR;
}

function getGuessesMade() {
	return this.guessesMade + 1;
}

function getGuesses(currentGuess, guessAccuracy) {
	this.guesses.push({
		number: currentGuess,
		guessAccuracy: guessAccuracy
	});
	return this.guesses;
}

function getResult(guessAccuracy, guessesMade) {
	let result = false;
	let dialog = false;
	if (guessAccuracy === CORRECT_GUESS_DESCRIPTOR) {
		result = WIN_DESCRIPTOR;
		dialog = RESULT_DIALOG_NAME;
	} else if (guessesMade === this.guessesAllowed) {
		result = LOSE_DESCRIPTOR;
		dialog = RESULT_DIALOG_NAME;
	}
	return {
		result: result,
		dialog: dialog
	};
}

function getTiles(options) {
	function generateTiles(numTiles) {
		return Array.from(Array(numTiles)).map((e,i) => {
			return {number: i + 1, guessAccuracy: false};
		});
	}
	let thisTile;
	if (!options) {
		return generateTiles(DEFAULT_TILES);
	}
	if (options.tiles) {
		return generateTiles(options.tiles);
	}
	if (options.tile && options.guessAccuracy) {
		thisTile = this.tiles.find((obj) => obj.number === options.tile.number);
		thisTile.guessAccuracy = options.guessAccuracy;
		return this.tiles;
	}
}

function getSecretNumber(max = DEFAULT_TILES) {
	return Math.floor(Math.random() * (max - 1 + 1) + 1);
}

function handleResultDialogAction(state) {
	return extend({}, getInitialState(), {
		secretNumber: getSecretNumber(state.tiles.length),
		guessesAllowed: state.guessesAllowed,
		tiles: getTiles({tiles: state.tiles.length}),
		dialog: state.dialog
	});
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
		guessesAllowed: DEFAULT_GUESSES_ALLOWED,
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
		dialog: SETTINGS_DIALOG_NAME
	};
}

export function saveSettings(data) {
	return {
		secretNumber: getSecretNumber(data.tiles),
		guessesAllowed: data.guessesAllowed,
		tiles: getTiles({tiles: data.tiles}),
		dialog: SPLASH_DIALOG_NAME
	};
}

export function cancelSettings() {
	return {
		dialog: SPLASH_DIALOG_NAME
	};
}

export function guess(state, tile) {
	const currentGuess = tile.number;
	const guessAccuracy = getGuessAccuracy.call(state, currentGuess);
	const guessesMade = getGuessesMade.call(state);
	const guesses = getGuesses.call(state, currentGuess, guessAccuracy);
	const result = getResult.call(state, guessAccuracy, guessesMade);
	const tiles = getTiles.call(state, {
		guessAccuracy: guessAccuracy,
		tile: tile
	});
	return extend({}, {
		currentGuess: currentGuess,
		guessAccuracy: guessAccuracy,
		guessesMade: guessesMade,
		guesses: guesses,
		tiles: tiles
	}, result);
}

export function replay(state) {
	return handleResultDialogAction(extend(state, {dialog: false}));
}

export function quit(state) {
	return handleResultDialogAction(extend(state, {dialog: SPLASH_DIALOG_NAME}));
}
