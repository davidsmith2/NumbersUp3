import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {
	green900,
	grey300
} from 'material-ui/styles/colors';
import {
	bindAll, 
	extend,
	partial
} from 'lodash';

import {getGuessAccuracyIconName} from '../../core';
import {styles} from '../styles';

function getCellHeight() {
	let paperWidth = styles.game.paper.width;
	paperWidth = parseInt(paperWidth.substring(0, paperWidth.length - 2), 10);
	return (paperWidth / 10) - 4;
}

export class Tiles extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired,
        muiTheme: React.PropTypes.object,
		game: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	bindAll(this, ['guess']);
    }

	render() {
		return (
			<div className="tiles" key="tiles" style={styles.tiles.container}>
				<div style={styles.tiles.gridListRoot}>
					<GridList cellHeight={getCellHeight()} cols={10} padding={0} style={styles.tiles.gridList}>
						{this.context.game.tiles.map(this.renderTile.bind(this))}
					</GridList>
				</div>
			</div>
		);
	}

	renderTile(tile) {
		const renderTileContent = (!tile.guessAccuracy) ? this.renderUnguessedTile : this.renderGuessedTile;
		return (
			<GridTile
				key={tile.number} 
				style={styles.tiles.gridTile}>
				<div className="tile tile-outer">
					{renderTileContent.call(this, tile)}
				</div>
			</GridTile>
		);
	}

	renderUnguessedTile(tile) {
		return (<a className="tile tile-inner" href="#" onClick={partial(this.guess, tile)} ref="guess">
			{tile.number}
		</a>);
	}

	renderGuessedTile(tile) {
		return (<i className="tile tile-inner visited material-icons">
			{getGuessAccuracyIconName(tile.guessAccuracy)}
		</i>);
	}

	guess(tile, event) {
		event.preventDefault();
		this.context.game.guess(tile);
	}

}
