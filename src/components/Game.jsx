import React from 'react';

import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';

const styles = {
	width: '940px',
	margin: '0 auto',
	overflow: 'auto',
	padding: '10px'
};

export class Game extends React.Component {
	render() {
		return <div className="game" style={styles}>
			<Tiles key="tiles" ref="tiles" tiles={this.props.tiles} />
			<Scoreboard key="scoreboard" ref="scoreboard" game={this.props.game} />
		</div>;
	}

};
