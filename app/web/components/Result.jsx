import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import {
	green900,
	lightBlueA700,
	red900,
	grey300
} from 'material-ui/styles/colors';

import {
	BUTTON_CLASSNAME,
	DIALOG_BODY_CLASSNAME,
	RESULT_DIALOG_TITLE,
	RESULT_DIALOG_REPLAY_BUTTON_LABEL,
	RESULT_DIALOG_QUIT_BUTTON_LABEL,
	RESULT_DIALOG_DESCRIPTION,
	RESULT_DIALOG_PROGRESS_LABEL
} from '../../core';
import {WebDialog} from './Dialog';

export class Result extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired,
        result: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	this.replay = this.replay.bind(this);
    	this.quit = this.quit.bind(this);
    }

	componentWillMount() {
		this.context.result.saveGame({
			guessesAllowed: this.context.result.guessesAllowed,
			guessesMade: this.context.result.guessesMade,
			result: this.context.result.result,
			secretNumber: this.context.result.secretNumber,
			tiles: this.context.result.tiles.length,
			user: this.context.result.user
		});
	}

	render() {
		return (
			<WebDialog
				actions={this.renderActions()}
				bodyClassName={`${DIALOG_BODY_CLASSNAME} text-center`}
				bodyContent={this.renderBodyContent()}
				modal={false}
				open={!!this.context.result.dialog}
				title={RESULT_DIALOG_TITLE(this.context.result.result)}
			/>
		);
	}

	renderActions() {
		return (
			[
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
			]
		);
	}

	renderBodyContent() {
		const els = [];
		els.push(
			<div key="result-description-text" style={{marginBottom: '2em'}}>
				<p>{RESULT_DIALOG_DESCRIPTION(this.context.result.secretNumber)}</p>
			</div>
		);
		if (this.context.result.saving) {
			els.push(
				<div key="result-description-loading" style={{marginBottom: '2em'}}>
					<CircularProgress color={lightBlueA700} size={20} style={{marginRight: '0.5em'}}/>
					{RESULT_DIALOG_PROGRESS_LABEL}
				</div>
			);
		}
		return (<div>{els}</div>);
	}

	replay() {
		this.context.result.replay();
	}

	quit() {
		this.context.result.quit();
	}

}
