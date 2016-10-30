import React from 'react';

export class Scoreboard extends React.Component {
	getCurrentGuess() {
		return this.props.data.currentGuess;
	}

	getGuessAccuracy() {
		return this.props.data.guessAccuracy;
	}

	getGuessesAllowed() {
		return this.props.data.guessesAllowed;
	}

	getGuessesMade() {
		return this.props.data.guessesMade;
	}

	getGuessesRemaining() {
		return this.getGuessesAllowed() - this.getGuessesMade();
	}

	render() {
		return <div className="scoreboard">
			<div className="currentGuess scoreboardSection">
				<div className="scoreboardSectionHeader">
					Current
				</div>
				<div className="scoreboardSectionBody">
					{this.getCurrentGuess()}
				</div>
			</div>
			<div className="guessAccuracy scoreboardSection">
				<div className="scoreboardSectionHeader">
					Accuracy
				</div>
				<div className="scoreboardSectionBody">
					{this.getGuessAccuracy()}
				</div>
			</div>
			<div className="guessesAllowed scoreboardSection">
				<div className="scoreboardSectionHeader">
					Allowed
				</div>
				<div className="scoreboardSectionBody">
					{this.getGuessesAllowed()}
				</div>
			</div>
			<div className="guessesMade scoreboardSection">
				<div className="scoreboardSectionHeader">
					Made
				</div>
				<div className="scoreboardSectionBody">
					{this.getGuessesMade()}
				</div>
			</div>
			<div className="guessesRemaining scoreboardSection">
				<div className="scoreboardSectionHeader">
					Remaining
				</div>
				<div className="scoreboardSectionBody">
					{this.getGuessesRemaining()}
				</div>
			</div>
		</div>;
	}

}
