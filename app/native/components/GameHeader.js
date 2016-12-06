import React from 'react';
import {
	Text,
	View
} from 'react-native';

import {styles} from '../styles';

export const GameHeader = (props) => {
	return (
		<View style={[styles.helpers.flexDirection('row'), styles.game.header]}>
			<Text>Numbers Up</Text>
		</View>
	);
};