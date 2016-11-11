import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {
	green900,
	red900,
	grey300
} from 'material-ui/styles/colors';

import {ResultDescription} from './ResultDescription';
import {
	BUTTON_CLASSNAME,
	DIALOG_CLASSNAME,
	DIALOG_CONTENT_CLASSNAME,
	DIALOG_TITLE_CLASSNAME,
	DIALOG_BODY_CLASSNAME,
	DIALOG_ACTIONS_CONTAINER_CLASSNAME,
	RESULT_DIALOG_TITLE,
	RESULT_DIALOG_REPLAY_BUTTON_LABEL,
	RESULT_DIALOG_QUIT_BUTTON_LABEL,
	saveGame
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
			<RaisedButton
				label={RESULT_DIALOG_REPLAY_BUTTON_LABEL}
				keyboardFocused={true}
				onTouchTap={this.replay}
				onClick={this.replay}
				backgroundColor={green900}
				className={BUTTON_CLASSNAME}
				labelColor={grey300}
			/>,
			<RaisedButton
				label={RESULT_DIALOG_QUIT_BUTTON_LABEL}
				keyboardFocused={false}
				onTouchTap={this.quit}
				onClick={this.quit}
				backgroundColor={red900}
				className={BUTTON_CLASSNAME}
				labelColor={grey300}
			/>
		];
		return (
			<Dialog
				title={RESULT_DIALOG_TITLE(this.props.result)}
				actions={actions}
				modal={false}
				open={this.props.open}
				className={DIALOG_CLASSNAME}
				contentClassName={DIALOG_CONTENT_CLASSNAME}
				titleClassName={DIALOG_TITLE_CLASSNAME}
				bodyClassName={DIALOG_BODY_CLASSNAME + ' text-center'}
				actionsContainerClassName={DIALOG_ACTIONS_CONTAINER_CLASSNAME}
			>
				<ResultDescription secretNumber={this.props.secretNumber} saving={this.props.saving} />
			</Dialog>
		);
	}

	componentWillMount() {
		this.context.store.dispatch(saveGame({
			guessesAllowed: this.props.guessesAllowed,
			guessesMade: this.props.guessesMade,
			result: this.props.result,
			secretNumber: this.props.secretNumber,
			tiles: this.props.tiles,
			user: this.props.user
		}));
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
