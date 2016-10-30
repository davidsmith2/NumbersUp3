import React from 'react';

export class Tiles extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

	guess(number) {
		this.context.store.dispatch({
			type: 'GUESS',
			number: number
		});
	}

	renderTile(tile) {
		return <div key={tile} className="tile">
			<a className="tileLink" href="#" ref="guess" onClick={() => this.guess(tile)}>
				{tile}
			</a>
		</div>;
	}

	render() {
		return <div className="tiles">
			{this.props.data.tiles.map(this.renderTile)}
		</div>;
	}

}
