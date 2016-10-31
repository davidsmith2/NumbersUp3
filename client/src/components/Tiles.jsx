import React from 'react';

export class Tiles extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

	render() {
		return <div className="tiles">
			{this.props.data.tiles.map(this.renderNumber.bind(this))}
		</div>;
	}

	renderNumber(number) {
		const func = (this.numberHasBeenGuessed(number)) ? this.renderGuessedNumber : this.renderUnguessedNumber;
		return <div key={number} className="tile">{func.call(this, number)}</div>;
	}

	renderGuessedNumber(number) {
		return <span className="tileSpan" ref="guess">
			{number} - {this.numberHasBeenGuessed(number).guessAccuracy}
		</span>;
	}

	renderUnguessedNumber(number) {
		return <a className="tileLink" href="#" ref="guess" onClick={() => this.guess(number)}>
			{number}
		</a>;
	}

	numberHasBeenGuessed(number) {
		return this.props.data.guesses.find((obj) => obj.number === number);
	}

	guess(number) {
		this.context.store.dispatch({
			type: 'GUESS',
			number: number
		});
	}

}
