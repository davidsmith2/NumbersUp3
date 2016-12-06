import React, {Component} from 'react';
import {Button, View} from 'react-native';

import {Dialog} from './Dialog';
import {
	SPLASH_DIALOG_TITLE,
	SPLASH_DIALOG_DESCRIPTION,
	SPLASH_DIALOG_PLAY_BUTTON_LABEL,
	SPLASH_DIALOG_SETTINGS_BUTTON_LABEL
} from '../../core';

export class Splash extends Component {
    static contextTypes = {
        splash: React.PropTypes.object.isRequired
    };

	render() {
		return (
			<Dialog 
				visible={this.props.dialog}
				headerContent={SPLASH_DIALOG_TITLE}
				bodyContent={SPLASH_DIALOG_DESCRIPTION}
				footerContent={this.renderFooterContent()}
			/>
		);
	}

	renderFooterContent() {
		return [
			<Button 
				key='play'
				onPress={this.play.bind(this)}
				title={SPLASH_DIALOG_PLAY_BUTTON_LABEL}
			/>,
			<Button 
				key='settings'
				onPress={this.settings.bind(this)}
				title={SPLASH_DIALOG_SETTINGS_BUTTON_LABEL}
			/>
		];
	}

	play() {
		this.context.splash.play();
	}

	settings() {
		this.context.splash.openSettings();
	}

}