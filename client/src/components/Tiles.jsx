import React from 'react';

export class Tiles extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

	getTiles() {
		return this.props.data.tiles;
	}

	guess(number) {
		this.context.store.dispatch({
			type: 'GUESS',
			number: number
		});
	}

	render() {
		const callback = (tile) => {
			return <div key={tile} className="tile">
				<a className="tileLink" href="#" ref="guess" onClick={() => this.guess(tile)}>
					{tile}
				</a>
			</div>;
		};
		return <div className="tiles">
			{this.getTiles().map(callback)}
		</div>;
	}

}
