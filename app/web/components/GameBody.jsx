import React from 'react';

import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';

export const GameBody = (props) => {
	return (
		<div>
			<Scoreboard key="scoreboard" />
			<Tiles key="tiles" />
		</div>
	);
};