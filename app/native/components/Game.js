import React from 'react';
import {
	View
} from 'react-native';

import {GameHeader} from './GameHeader';
import {GameBody} from './GameBody';
import {GameFooter} from './GameFooter';

export const Game = (props) => {
	return (
		<View>
			<GameHeader key="game-header" />
			<GameBody key="game-body" />
			<GameFooter key="game-footer" />
		</View>
	);
}