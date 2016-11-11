import React from 'react';
import Paper from 'material-ui/Paper';

import {Header} from './Header';
import {Board} from './Board';
import {styles} from '../styles';

export class Game extends React.Component {
	render() {
		const children = [
			<Header key="header" />,
			<Board key="board" tiles={this.props.tiles} game={this.props.game} />
		];
		return (
			<div className="game">
				<Paper children={children} style={styles.game.paper} zDepth={1} />
			</div>
		);
	}

};
