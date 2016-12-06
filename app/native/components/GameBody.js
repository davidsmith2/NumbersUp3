import React from 'react';
import {
	View
} from 'react-native';

import {badges} from '../../core';
import {styles} from '../styles';
import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';

export const GameBody = (props) => {
	return (
		<View>
			<Scoreboard key="scoreboard" />
			<Tiles key="tiles" />
		</View>
	);

}