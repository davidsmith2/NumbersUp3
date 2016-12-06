import React, {Component} from 'react';
import {Button, Picker, Text, View} from 'react-native';

import {Dialog} from './Dialog';
import {Settings} from '../../components/Settings';
import {
	SETTINGS_DIALOG_TITLE,
	SETTINGS_DIALOG_SAVE_BUTTON_LABEL,
	SETTINGS_DIALOG_CANCEL_BUTTON_LABEL
} from '../../core';

export class NativeSettings extends Settings {
	static contextTypes = Settings.getContextTypes();

	render() {
		return (
			<Dialog 
				visible={!!this.context.settings.dialog}
				headerContent={SETTINGS_DIALOG_TITLE}
				bodyContent={this.renderBodyContent()}
				footerContent={this.renderFooterContent()}
			/>
		);
	}

	renderBodyContent() {
		return (
			<View>
				<View key='guessesAllowed'>
					<Text>Guesses allowed</Text>
					<Picker
						onValueChange={this.onChangeGuessesAllowed}
						selectedValue={this.state.guessesAllowed}
					>
						<Picker.Item label="13" value={13} />
						<Picker.Item label="10" value={10} />
						<Picker.Item label="7" value={7} />
					</Picker>
				</View>
				<View key='tiles'>
					<Text>Tiles</Text>
					<Picker
						onValueChange={this.onChangeTiles}
						selectedValue={this.state.tiles}
					>
						<Picker.Item label="25" value={25} />
						<Picker.Item label="50" value={50} />
						<Picker.Item label="100" value={100} />
					</Picker>
				</View>
			</View>
		);
	}

	renderFooterContent() {
		return [
			<Button 
				key='save'
				onPress={this.save}
				title={SETTINGS_DIALOG_SAVE_BUTTON_LABEL}
			/>,
			<Button 
				key='cancel'
				onPress={this.cancel}
				title={SETTINGS_DIALOG_CANCEL_BUTTON_LABEL}
			/>
		];
	}

	onChangeGuessesAllowed(value) {
		this.setState({
			guessesAllowed: value
		});
	}

	onChangeTiles(value) {
		this.setState({
			tiles: value
		});
	}

}