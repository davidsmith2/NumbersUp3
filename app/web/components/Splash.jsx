import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
	green900,
	yellowA700,
	grey300,
	grey900
} from 'material-ui/styles/colors';

import {
	BUTTON_CLASSNAME,
	SPLASH_DIALOG_TITLE,
	SPLASH_DIALOG_DESCRIPTION,
	SPLASH_DIALOG_PLAY_BUTTON_LABEL,
	SPLASH_DIALOG_SETTINGS_BUTTON_LABEL
} from '../../core';
import {WebDialog} from './Dialog';

export class Splash extends React.Component {
    static contextTypes = {
        muiTheme: React.PropTypes.object,
        splash: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	this.play = this.play.bind(this);
    	this.settings = this.settings.bind(this);
    }

	render() {
		return (
			<WebDialog
				actions={this.renderActions()}
				bodyContent={this.renderBodyContent()}
				modal={false}
				open={!!this.context.splash.dialog}
				title={SPLASH_DIALOG_TITLE}
			/>
		);

	}

	renderActions() {
		return (
			[
				<RaisedButton
					label={SPLASH_DIALOG_PLAY_BUTTON_LABEL}
					keyboardFocused={true}
					onTouchTap={this.play}
					onClick={this.play}
					backgroundColor={green900}
					className={BUTTON_CLASSNAME}
					labelColor={grey300}
				/>,
				<RaisedButton
					label={SPLASH_DIALOG_SETTINGS_BUTTON_LABEL}
					keyboardFocused={false}
					onTouchTap={this.settings}
					onClick={this.settings}
					backgroundColor={yellowA700}
					className={BUTTON_CLASSNAME}
					labelColor={grey900}
				/>
			]
		);
	}

	renderBodyContent() {
		return (
			<p>{SPLASH_DIALOG_DESCRIPTION}</p>
		);
	}

	play() {
		this.context.splash.play();
	}

	settings() {
		this.context.splash.openSettings();
	}
};
