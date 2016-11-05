import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {
	SPLASH_DIALOG_TITLE,
	SPLASH_DIALOG_DESCRIPTION,
	SPLASH_DIALOG_PLAY_BUTTON_LABEL,
	SPLASH_DIALOG_SETTINGS_BUTTON_LABEL
} from '../core';

export class Splash extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	this.play = this.play.bind(this);
    	this.settings = this.settings.bind(this);
    }

	render() {
		const actions = [
			<FlatButton
				label={SPLASH_DIALOG_PLAY_BUTTON_LABEL}
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.play}
				onClick={this.play} />,
			<FlatButton
				label={SPLASH_DIALOG_SETTINGS_BUTTON_LABEL}
				primary={false}
				keyboardFocused={false}
				onTouchTap={this.settings}
				onClick={this.settings} />
		];
		return (
			<MuiThemeProvider>
				<Dialog
					title={SPLASH_DIALOG_TITLE}
					actions={actions}
					modal={false}
					open={this.props.open}>
					<p>{SPLASH_DIALOG_DESCRIPTION}</p>
				</Dialog>
			</MuiThemeProvider>
		);

	}

	play() {
		this.context.store.dispatch({
			type: 'PLAY'
		});
	}

	settings() {
		this.context.store.dispatch({
			type: 'OPEN_SETTINGS'
		});
	}
};
