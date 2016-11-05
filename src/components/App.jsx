import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {pick, isEqual} from 'lodash';

import {Game} from './Game';
import {Splash} from './Splash';
import {Settings} from './Settings';
import {Result} from './Result';

export class App extends React.Component {
    constructor(props) {
    	super(props);
		injectTapEventPlugin();
    }

	render() {
		let els = [];
		els.push(<Game key="game" tiles={this.props.tiles} game={this.getGame()} />);
		if (isEqual(this.props.dialog, 'splash')) {
			els.push(<Splash key="splash" open={!!this.props.dialog} />)
		}
		if (isEqual(this.props.dialog, 'settings')) {
			els.push(<Settings key="settings" open={!!this.props.dialog} guessesAllowed={this.props.guessesAllowed} tiles={this.props.tiles.length} />)
		}
		if (isEqual(this.props.dialog, 'result')) {
			els.push(<Result key="result" open={!!this.props.dialog} result={this.props.result} secretNumber={this.props.secretNumber} />)
		}
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
