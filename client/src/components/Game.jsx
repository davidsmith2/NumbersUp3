import React from 'react';

import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';

export class Game extends React.Component {
	render() {
		return <div className="game">
			<Scoreboard ref="scoreboard" data={this.props.data} />
			<Tiles ref="tiles" data={this.props.data} />
		</div>;
	}
};
