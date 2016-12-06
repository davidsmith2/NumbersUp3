import React from 'react';
import {extend, isEqual, pick} from 'lodash';

export class App extends React.Component {
    static getChildContextTypes = (childContextTypes = {}) => {
    	const parentContextTypes = {
			game: React.PropTypes.object.isRequired,
			login: React.PropTypes.object.isRequired,
			splash: React.PropTypes.object.isRequired,
			settings: React.PropTypes.object.isRequired,
			result: React.PropTypes.object.isRequired
	    };
    	return extend({}, parentContextTypes, childContextTypes);
    };

    constructor(props) {
    	super(props);
    	this.subcomponents = this.getSubcomponents();
    }

    getChildContext(childContext = {}) {
    	const parentContext = {
    		game: this.getGameContext(),
    		login: this.getLoginContext(),
    		splash: this.getSplashContext(),
    		settings: this.getSettingsContext(),
    		result: this.getResultContext()
    	};
    	return extend({}, parentContext, childContext);
    }

	render() {
		let els = [];
		els.push(this.renderGame());
		if (this.props.user) {
			els.push(this.renderLoggedIn());
		} else {
			els.push(this.renderLoggedOut());
		}
		return this.getWrapper(els);
	}

	renderGame() {
		return (<this.subcomponents.game key="game" />);
	}

	renderLoggedIn() {
		if (isEqual(this.props.dialog, 'splash')) {
			return (<this.subcomponents.splash key="splash" />);
		}
		if (isEqual(this.props.dialog, 'settings')) {
			return (<this.subcomponents.settings key="settings" />);
			
		}
		if (isEqual(this.props.dialog, 'result')) {
			return (<this.subcomponents.result key="result" />);
		}
	}

	renderLoggedOut() {
		return (<this.subcomponents.login key="login" />);
	}

	getGameContext() {
		return pick(this.props,
			'currentGuess', 
			'guess',
			'guessAccuracy', 
			'guessesAllowed', 
			'guessesMade', 
			'guessesRemaining',
			'quit',
			'tiles'
		);
	}

	getLoginContext() {
		return pick(this.props,
			'login',
			'user'
		);
	}

	getSplashContext() {
		return pick(this.props,
			'dialog',
			'openSettings', 
			'play'
		);
	}

	getSettingsContext() {
		return pick(this.props,
			'cancelSettings',
			'dialog', 
			'guessesAllowed',
			'saveSettings',
			'tiles'
		);
	}

	getResultContext() {
		return pick(this.props,
			'dialog', 
			'guessesAllowed',
			'guessesMade',
			'quit',
			'replay',
			'result',
			'saveGame',
			'saving',
			'secretNumber',
			'tiles',
			'user'
		);
	}

	getSubcomponents() {
		throw new Error('Must be implemented by subclass'); 
	}

	getWrapper() {
		throw new Error('Must be implemented by subclass'); 
	}

}