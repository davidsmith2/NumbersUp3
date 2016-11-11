import React from 'react';

import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';
import {Buttons} from './Buttons';

export const Board = (props) => {
	return(
		<div>
			<Scoreboard key="scoreboard" game={props.game} />
			<Tiles key="tiles" tiles={props.tiles} />
			<Buttons key="buttons" />
		</div>
	);
};
