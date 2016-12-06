import React from 'react';
import Paper from 'material-ui/Paper';

import {GameHeader} from './GameHeader';
import {GameBody} from './GameBody';
import {GameFooter} from './GameFooter';

import {styles} from '../styles';

export const Game = (props) => {
	return (
		<Paper style={styles.game.paper} zDepth={1}>
			<GameHeader key="game-header" />
			<GameBody key="game-body" />
			<GameFooter key="game-footer" />
		</Paper>
	);
};
