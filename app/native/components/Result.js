import React, {Component} from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';

import {Dialog} from './Dialog';
import {
	BUTTON_CLASSNAME,
	DIALOG_CLASSNAME,
	DIALOG_CONTENT_CLASSNAME,
	DIALOG_TITLE_CLASSNAME,
	DIALOG_BODY_CLASSNAME,
	DIALOG_ACTIONS_CONTAINER_CLASSNAME,
	RESULT_DIALOG_TITLE,
	RESULT_DIALOG_REPLAY_BUTTON_LABEL,
	RESULT_DIALOG_QUIT_BUTTON_LABEL
} from '../../core';
import {styles} from '../styles';

import {
	RESULT_DIALOG_DESCRIPTION,
	RESULT_DIALOG_PROGRESS_LABEL
} from '../../core';

export class Result extends Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired,
        result: React.PropTypes.object.isRequired
    };

	componentWillMount() {
		this.context.result.saveGame({
			guessesAllowed: this.context.result.guessesAllowed,
			guessesMade: this.context.result.guessesMade,
			result: this.context.result.result,
			secretNumber: this.context.result.secretNumber,
			tiles: this.context.result.tiles.length,
			user: this.context.result.user
		}, 'http://localhost:4711');
	}

	render() {
		return (
			<Dialog
				visible={!!this.context.result.result.dialog}
				headerContent={RESULT_DIALOG_TITLE(this.context.result.result)}
				bodyContent={this.renderBodyContent()}
				footerContent={this.renderFooterContent()}
			/>
		);
	}

	renderBodyContent() {
		const els = [];
		els.push(
			<View key="result-description-text" style={[styles.helpers.flexDirection('row'), {justifyContent: 'center'}]}>
				<Text>{RESULT_DIALOG_DESCRIPTION(this.context.result.secretNumber)}</Text>
			</View>
		);
		if (this.context.result.saving) {
			els.push(
				<View key="result-description-loading" style={[styles.helpers.flexDirection('row'), {justifyContent: 'center'}]}>
					<ActivityIndicator animating={this.context.result.saving} style={styles.helpers.flexDirection('column')} />
					<Text style={styles.helpers.flexDirection('column')}>{RESULT_DIALOG_PROGRESS_LABEL}</Text>
				</View>
			);
		}
		return (<View>{els}</View>);
	}

	renderFooterContent() {
		return (
			<View style={styles.helpers.flexDirection('row')}>
				<Button 
					key='Replay'
					onPress={this.replay.bind(this)}
					title={RESULT_DIALOG_REPLAY_BUTTON_LABEL}
					style={styles.helpers.flexDirection('column')}
				/>
				<Button 
					key='Quit'
					onPress={this.quit.bind(this)}
					title={RESULT_DIALOG_QUIT_BUTTON_LABEL}
					style={styles.helpers.flexDirection('column')}
				/>
			</View>
		);
	}

	replay() {
		this.context.result.replay();
	}

	quit() {
		this.context.result.quit();
	}

}