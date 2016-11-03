export function getGuessAccuracyIconName(guessAccuracy) {
	switch(guessAccuracy) {
		case 'Low':
			return 'arrow_downward';
		case 'High':
			return 'arrow_upward';
		case 'Match':
			return 'check';
	}
}
