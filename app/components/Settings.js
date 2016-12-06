import React from 'react';
import {bindAll} from 'lodash';

export class Settings extends React.Component {
	static getContextTypes = () => {
		return {
			settings: React.PropTypes.object.isRequired
		};
	};

    constructor(props, context) {
    	super(props, context);
    	bindAll(this, ['save', 'cancel', 'onChangeGuessesAllowed', 'onChangeTiles']);
    }

    componentWillMount() {
		this.setState({
			guessesAllowed: this.context.settings.guessesAllowed,
			tiles: this.context.settings.tiles.length
		});
    }

	save() {
		this.context.settings.saveSettings({
			guessesAllowed: this.state.guessesAllowed,
			tiles: this.state.tiles
		});
	}

	cancel() {
		this.context.settings.cancelSettings();
	}

}