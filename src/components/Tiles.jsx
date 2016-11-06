import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

import {getGuessAccuracyIconName} from '../core';

const styles = {
	container: {
		margin: '10px 0'
	},
	gridListRoot: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
		width: '100%',
		height: '100%',
		overflowY: 'hidden'
	},
	gridTile: {
		backgroundColor: '#eee',
		border: '1px solid #ddd'
	},
	gridTileContent: {
		position: 'relative',
		top: '50%',
		transform: 'translateY(-50%)',
		textAlign: 'center'
	},
	raisedButtonRoot: {
		marginTop: '20px',
		textAlign: 'center'
	}
};

export class Tiles extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	this.quit = this.quit.bind(this);
    }

	render() {
		return (
			<MuiThemeProvider>
				<div className="tiles" key="tiles" style={styles.container}>
					<div className="gridListRoot" style={styles.gridListRoot}>
						<GridList cellHeight={50} cols={10} padding={0} style={styles.gridList}>
							{this.props.tiles.map(this.renderTile.bind(this))}
						</GridList>
					</div>
					<div className="raisedButtonRoot" style={styles.raisedButtonRoot}>
						<RaisedButton
							label='Quit'
							secondary={true}
							keyboardFocused={false}
							onTouchTap={this.quit}
							onClick={this.quit}
						/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}

	renderTile(tile) {
		const renderTileContent = (!tile.guessAccuracy) ? this.renderUnguessedTile : this.renderGuessedTile;
		return (
			<GridTile
				key={tile.number} 
				style={styles.gridTile}>
				<div className="gridTileContent" style={styles.gridTileContent}>
					{renderTileContent.call(this, tile)}
				</div>
			</GridTile>
		);
	}

	renderUnguessedTile(tile) {
		return (<a className="gridTileContentLink" href="#" onClick={() => this.guess(tile)} ref="guess">
			{tile.number}
		</a>);
	}

	renderGuessedTile(tile) {
		return (<i className="gridTileContentVisited material-icons">
			{getGuessAccuracyIconName(tile.guessAccuracy)}
		</i>);
	}

	guess(tile) {
		this.context.store.dispatch({
			type: 'GUESS',
			tile: tile
		});
	}

	quit() {
		this.context.store.dispatch({
			type: 'QUIT'
		});
	}

}
