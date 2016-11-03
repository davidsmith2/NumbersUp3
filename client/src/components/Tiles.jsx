import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

import {getGuessAccuracyIconName} from '../common';

const styles = {
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
  gridTileContentFontSize: {
  	fontSize: '34px'
  }
};

export class Tiles extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

	render() {
		return (
			<MuiThemeProvider>
				<div style={{float: 'left', width: '680px', marginRight: '20px'}}>
					<div className="gridListRoot" style={styles.gridListRoot}>
						<GridList cellHeight={68} cols={10} padding={0} style={styles.gridList}>
							{this.props.data.tiles.map(this.renderTile.bind(this))}
						</GridList>
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
		return (<a className="gridTileContentLink" href="#" onClick={() => this.guess(tile)} ref="guess" style={styles.gridTileContentFontSize}>
			{tile.number}
		</a>);
	}

	renderGuessedTile(tile) {
		return (<i className="gridTileContentVisited material-icons" style={styles.gridTileContentFontSize}>
			{getGuessAccuracyIconName(tile.guessAccuracy)}
		</i>);
	}

	guess(tile) {
		this.context.store.dispatch({
			type: 'GUESS',
			tile: tile
		});
	}

}
