import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {
	green900,
	yellowA700,
	grey300,
	grey900
} from 'material-ui/styles/colors';

import {
	BUTTON_CLASSNAME,
	DIALOG_CLASSNAME,
	DIALOG_CONTENT_CLASSNAME,
	DIALOG_TITLE_CLASSNAME,
	DIALOG_BODY_CLASSNAME,
	DIALOG_ACTIONS_CONTAINER_CLASSNAME,
	SPLASH_DIALOG_TITLE,
	SPLASH_DIALOG_DESCRIPTION,
	SPLASH_DIALOG_PLAY_BUTTON_LABEL,
	SPLASH_DIALOG_SETTINGS_BUTTON_LABEL
} from '../core';

export class Splash extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired,
        muiTheme: React.PropTypes.object
    };

    constructor(props, context) {
    	super(props, context);
    	this.play = this.play.bind(this);
    	this.settings = this.settings.bind(this);
    }

	render() {
		const actions = [
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
		];
		return (
			<Dialog
				title={SPLASH_DIALOG_TITLE}
				actions={actions}
				modal={false}
				open={this.props.open}
				className={DIALOG_CLASSNAME}
				contentClassName={DIALOG_CONTENT_CLASSNAME}
				titleClassName={DIALOG_TITLE_CLASSNAME}
				bodyClassName={DIALOG_BODY_CLASSNAME}
				actionsContainerClassName={DIALOG_ACTIONS_CONTAINER_CLASSNAME}
			>
				<p>{SPLASH_DIALOG_DESCRIPTION}</p>
			</Dialog>
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
