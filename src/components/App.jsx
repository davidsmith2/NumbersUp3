import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {pick, isEqual} from 'lodash';

import {Game} from './Game';
import {Login} from './Login';
import {Splash} from './Splash';
import {Settings} from './Settings';
import {Result} from './Result';
import {muiTheme} from '../muiTheme';

export class App extends React.Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props) {
    	super(props);
		injectTapEventPlugin();
    }

    getChildContext() {
    	return {
    		muiTheme: muiTheme
    	};
    }

	render() {
		let els = [];
		els.push(
			<Game 
				key="game" 
				tiles={this.props.tiles} 
				game={this.getGame()} 
			/>
		);
		if (!this.props.user) {
			els.push(
				<Login 
					key="login" 
					open={!this.props.user} 
				/>
			);
		} else {
			if (isEqual(this.props.dialog, 'splash')) {
				els.push(
					<Splash 
						key="splash" 
						open={!!this.props.dialog} 
					/>
				);
			}
			if (isEqual(this.props.dialog, 'settings')) {
				els.push(
					<Settings 
						key="settings" 
						open={!!this.props.dialog} 
						guessesAllowed={this.props.guessesAllowed} 
						tiles={this.props.tiles.length} 
					/>
				);
			}
			if (isEqual(this.props.dialog, 'result')) {
				els.push(
					<Result 
						key="result" 
						open={!!this.props.dialog} 
						result={this.props.result} 
						secretNumber={this.props.secretNumber} 
						saving={this.props.saving} 
						user={this.props.user} 
						guessesAllowed={this.props.guessesAllowed} 
						guessesMade={this.props.guessesMade}
						tiles={this.props.tiles.length}
					/>
				);
			}
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
