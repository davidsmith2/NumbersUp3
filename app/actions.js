export function login(user) {
	return {
		type: 'LOGIN',
		payload: user
	};
}

export function play() {
	return {
		type: 'PLAY'
	};
}

export function openSettings() {
	return {
		type: 'OPEN_SETTINGS'
	};
}

export function saveSettings(settings) {
	return {
		type: 'SAVE_SETTINGS',
		payload: settings
	};
}

export function cancelSettings() {
	return {
		type: 'CANCEL_SETTINGS'
	};
}

export function guess(tile) {
	return {
		type: 'GUESS',
		payload: tile
	};
}

export function replay() {
	return {
		type: 'REPLAY'
	};
}

export function quit() {
	return {
		type: 'QUIT'
	};
}
