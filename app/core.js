import 'babel-polyfill';
import {
	extend,
	flow,
	omit,
	wrap
} from 'lodash';
import 'whatwg-fetch';

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

const CURRENT_GUESS_LABEL_CONTENT = 'Current';
const GUESS_ACCURACY_LABEL_CONTENT = 'Accuracy';
const GUESSES_ALLOWED_LABEL_CONTENT = 'Allowed';
const GUESSES_MADE_LABEL_CONTENT = 'Made';
const GUESSES_REMAINING_LABEL_CONTENT = 'Remaining';

export const DIALOG_CLASSNAME = 'dialog';
export const DIALOG_CONTENT_CLASSNAME = 'dialog__content';
export const DIALOG_TITLE_CLASSNAME = 'dialog__title';
export const DIALOG_BODY_CLASSNAME = 'dialog__body';
export const DIALOG_ACTIONS_CONTAINER_CLASSNAME = 'dialog__actions-container';

export const BUTTON_CLASSNAME = 'button';

export const LOGIN_DIALOG_TITLE = 'Login';
export const LOGIN_DIALOG_LOGIN_BUTTON_LABEL = 'Login';
export const LOGIN_DIALOG_TEXT_FIELD_HINT_TEXT = 'Your name';
export const LOGIN_DIALOG_TEXT_FIELD_ERROR_TEXT = 'This field is required';

export const SPLASH_DIALOG_TITLE = 'Numbers Up';
export const SPLASH_DIALOG_DESCRIPTION = 'Guess the secret number before you run out of guesses.';
export const SPLASH_DIALOG_PLAY_BUTTON_LABEL = 'Play';
export const SPLASH_DIALOG_SETTINGS_BUTTON_LABEL = 'Settings';

export const SETTINGS_DIALOG_TITLE = 'Settings';
export const SETTINGS_DIALOG_SAVE_BUTTON_LABEL = 'Save';
export const SETTINGS_DIALOG_CANCEL_BUTTON_LABEL = 'Cancel';

export const RESULT_DIALOG_TITLE = (result) => `You ${result}!`;
export const RESULT_DIALOG_DESCRIPTION = (secretNumber) => `The secret number was ${secretNumber}.`;
export const RESULT_DIALOG_REPLAY_BUTTON_LABEL = 'Replay';
export const RESULT_DIALOG_QUIT_BUTTON_LABEL = 'Quit';
export const RESULT_DIALOG_PROGRESS_LABEL = 'Saving game...';

export const QUIT_BUTTON_LABEL = 'Quit';

function getCurrentGuess(options) {
	options.currentGuess = options.tile.number;
	return options;
}

function getGuessAccuracy(options) {
	let guessAccuracy;
	if (options.currentGuess < this.secretNumber) {
		guessAccuracy = LOW_GUESS_DESCRIPTOR;
	} else if (options.currentGuess > this.secretNumber) {
		guessAccuracy = HIGH_GUESS_DESCRIPTOR;
	} else {
		guessAccuracy = CORRECT_GUESS_DESCRIPTOR;
	}
	options.guessAccuracy = guessAccuracy;
	return options;
}

function getGuessesMade(options) {
	options.guessesMade = this.guessesMade + 1;
	return options;
}

function getGuesses(options) {
	this.guesses.push({
		number: options.currentGuess,
		guessAccuracy: options.guessAccuracy
	});
	options.guesses = this.guesses;
	return options;
}

function getResult(options) {
	let result = false;
	let dialog = false;
	if (options.guessAccuracy === CORRECT_GUESS_DESCRIPTOR) {
		result = WIN_DESCRIPTOR;
		dialog = RESULT_DIALOG_NAME;
	} else if (options.guessesMade === this.guessesAllowed) {
		result = LOSE_DESCRIPTOR;
		dialog = RESULT_DIALOG_NAME;
	}
	options.result = result;
	options.dialog = dialog;
	return options;
}

function getTiles(options) {
	function createTiles(numTiles) {
		return Array.from(Array(numTiles)).map((tile, index) => {
			return {number: index + 1, guessAccuracy: false};
		});
	}
	function updateTiles(tiles) {
		return tiles.map((tile, index) => {
			if (tile.number === this.tile.number) {
				tile.guessAccuracy = this.guessAccuracy;
			}
			return tile;
		}, this);
	}
	// create tiles from default number
	if (!options) {
		return createTiles(DEFAULT_TILES);
	}
	// create tiles from specific number
	if (options.tiles) {
		return createTiles(options.tiles);
	}
	// update tiles after a guess has been made
	if (options.tile && options.guessAccuracy) {
		options.tiles = updateTiles.call(options, this.tiles);
		return options;
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

const getCurrentGuessBadgeContent = (game) => {
	return game.currentGuess || '-';
};

const getGuessAccuracyBadgeContent = (func, game) => {
	if (!game.guessAccuracy) {
		return '-';
	}
	return func(game.guessAccuracy);
};

const getGuessesRemainingBadgeContent = (game) => {
	return game.guessesAllowed - game.guessesMade;
};

export const getGuessAccuracyIconName = (guessAccuracy) => {
	switch(guessAccuracy) {
		case LOW_GUESS_DESCRIPTOR:
			return LOW_GUESS_ICON_NAME;
		case HIGH_GUESS_DESCRIPTOR:
			return HIGH_GUESS_ICON_NAME;
		case CORRECT_GUESS_DESCRIPTOR:
			return CORRECT_GUESS_ICON_NAME;
	}
};

export const badges = [
	{
		rootContent: CURRENT_GUESS_LABEL_CONTENT,
		badgeContent: getCurrentGuessBadgeContent
	},
	{
		rootContent: GUESS_ACCURACY_LABEL_CONTENT,
		badgeContent: wrap(getGuessAccuracyIconName, getGuessAccuracyBadgeContent)
	},
	{
		rootContent: GUESSES_ALLOWED_LABEL_CONTENT,
		badgeContent: 'guessesAllowed'
	},
	{
		rootContent: GUESSES_MADE_LABEL_CONTENT,
		badgeContent: 'guessesMade'
	},
	{
		rootContent: GUESSES_REMAINING_LABEL_CONTENT,
		badgeContent: getGuessesRemainingBadgeContent
	}
];

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
	const deriveNextState = flow([
		getCurrentGuess,
		getGuessAccuracy,
		getGuessesMade,
		getGuesses,
		getResult,
		getTiles
	]);
	return omit(deriveNextState.call(state, {tile: tile}), 'tile');
}

export function replay(state) {
	return handleResultDialogAction(extend(state, {dialog: false}));
}

export function quit(state) {
	return handleResultDialogAction(extend(state, {dialog: SPLASH_DIALOG_NAME}));
}

export function saveGame(data, url = API_URL_ROOT) {
	return (dispatch) => {
		dispatch({type: 'SAVE_GAME_BEFORE'});
		setTimeout(() => {
			return fetch(url + '/api/games', {
				method: 'post',
				body: JSON.stringify(data),
				headers: new Headers({'Content-Type': 'application/json'})
			}).then((response) => {
				dispatch({type: 'SAVE_GAME_SUCCESS'});
			}).catch((error) => {
				dispatch({type: 'SAVE_GAME_ERROR'});
			});
		}, 1000);
	};
};
