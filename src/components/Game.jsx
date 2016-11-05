import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';

const styles = {
	container: {
		width: '960px',
		margin: '0 auto'
	},
	paper: {
		margin: '0 auto',
		overflow: 'auto',
		padding: '10px'
	}
};

export class Game extends React.Component {
	render() {
		const children = [
			<Tiles key="tiles" ref="tiles" tiles={this.props.tiles} />,
			<Scoreboard key="scoreboard" ref="scoreboard" game={this.props.game} />
		];
		return <div className="game" style={styles.container}>
			<MuiThemeProvider>
				<Paper children={children} style={styles.paper} zDepth={1}/>
			</MuiThemeProvider>
		</div>;
	}

};
