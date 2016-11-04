import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {pick} from 'lodash';

import {Game} from './Game';
import {Result} from './Result';
import {Splash} from './Splash';

export class App extends React.Component {
    constructor(props) {
    	super(props);
		injectTapEventPlugin();
    }

	render() {
		let els = [];
		if (!this.props.started) {
			els.push(<Splash key="splash" started={this.props.started} />)
		}
		if (this.props.result) {
			els.push(<Result key="result" result={this.props.result} secretNumber={this.props.secretNumber} />)
		}
		els.push(<Game key="game" tiles={this.props.tiles} game={this.getGame()} />);
		return <div>{els}</div>
	}

	getGame() {
		return pick(this.props,
			'currentGuess', 
			'guessAccuracy', 
			'guessesAllowed', 
			'guessesMade', 
			'guessesRemaining'
		);
	}
}
