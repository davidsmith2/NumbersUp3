import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import {Header} from './Header';
import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';

const styles = {
	paper: {
		width: '500px',
		overflow: 'auto',
		padding: '20px'
	}
};

export class Game extends React.Component {
	render() {
		const children = [
			<Header key="header" />,
			<Scoreboard key="scoreboard" ref="scoreboard" game={this.props.game} />,
			<Tiles key="tiles" ref="tiles" tiles={this.props.tiles} />
		];
		return (
			<MuiThemeProvider>
				<div className="game" style={styles.game}>
					<Paper children={children} style={styles.paper} zDepth={1} />
				</div>
			</MuiThemeProvider>
		);
	}

};
