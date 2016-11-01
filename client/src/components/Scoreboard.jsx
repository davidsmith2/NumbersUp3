import React from 'react';

export class Scoreboard extends React.Component {
	renderSection(key, headerValue, bodyValue) {
		return <div key={key} className="scoreboardSection">
			<div className="scoreboardSectionHeader">
				{headerValue}
			</div>
			<div className="scoreboardSectionBody">
				{bodyValue}
			</div>
		</div>;
	}

	render() {
		let sections = [];
		sections.push(
			this.renderSection(
				'currentGuess', 
				'Current', 
				this.props.data.currentGuess || '-'
			)
		);
		sections.push(
			this.renderSection(
				'guessAccuracy', 
				'Accuracy', 
				this.props.data.guessAccuracy || '-'
			)
		);
		sections.push(
			this.renderSection(
				'guessesAllowed', 
				'Allowed', 
				this.props.data.guessesAllowed
			)
		);
		sections.push(
			this.renderSection(
				'guessesMade', 
				'Made', 
				this.props.data.guessesMade
			)
		);
		sections.push(
			this.renderSection(
				'guessesRemaining', 
				'Remaining', 
				this.props.data.guessesAllowed - this.props.data.guessesMade
			)
		);
		sections.push(
			this.renderSection(
				'result', 
				'Result', 
				this.props.data.result || '-'
			)
		);
		return <div className="scoreboard">{sections}</div>;
	}

}
