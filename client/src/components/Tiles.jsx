import React from 'react';

export class Tiles extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

	render() {
		return (<div className="tiles">
			{this.props.data.tiles.map(this.renderTile.bind(this))}
		</div>);
	}

	renderTile(tile) {
		const func = (tile.guessAccuracy) ? this.renderGuessedTile : this.renderUnguessedTile;
		return (<div key={tile.number} className="tile">{func.call(this, tile)}</div>);
	}

	renderGuessedTile(tile) {
		return (<span className="tileSpan" ref="guess">{tile.number} - {tile.guessAccuracy}</span>);
	}

	renderUnguessedTile(tile) {
		return (<a className="tileLink" href="#" ref="guess" onClick={() => this.guess(tile)}>
			{tile.number}
		</a>);
	}

	guess(tile) {
		this.context.store.dispatch({
			type: 'GUESS',
			tile: tile
		});
	}

}
