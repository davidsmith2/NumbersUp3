import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {ResultDescription} from './ResultDescription';
import {
	RESULT_DIALOG_TITLE,
	RESULT_DIALOG_REPLAY_BUTTON_LABEL,
	RESULT_DIALOG_QUIT_BUTTON_LABEL
} from '../core';

export class Result extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	this.replay = this.replay.bind(this);
    	this.quit = this.quit.bind(this);
    }

	render() {
		const actions = [
			<FlatButton
				label={RESULT_DIALOG_REPLAY_BUTTON_LABEL}
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.replay}
				onClick={this.replay} />,
			<FlatButton
				label={RESULT_DIALOG_QUIT_BUTTON_LABEL}
				primary={false}
				keyboardFocused={false}
				onTouchTap={this.quit}
				onClick={this.quit} />
		];
		return (
			<MuiThemeProvider>
				<Dialog
					title={RESULT_DIALOG_TITLE(this.props.result)}
					actions={actions}
					modal={false}
					open={this.props.open}>
					<ResultDescription secretNumber={this.props.secretNumber} />
				</Dialog>
			</MuiThemeProvider>
		);
	}

	replay() {
		this.context.store.dispatch({
			type: 'REPLAY'
		});
	}

	quit() {
		this.context.store.dispatch({
			type: 'QUIT'
		});
	}

}
