import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Subheader from 'material-ui/Subheader';
import {
	green900,
	red900,
	grey300
} from 'material-ui/styles/colors';

import {Settings} from '../../components/Settings';
import {
	BUTTON_CLASSNAME,
	SETTINGS_DIALOG_TITLE,
	SETTINGS_DIALOG_SAVE_BUTTON_LABEL,
	SETTINGS_DIALOG_CANCEL_BUTTON_LABEL
} from '../../core';
import {styles} from '../styles';
import {WebDialog} from './Dialog';

export class WebSettings extends Settings {
	static contextTypes = Settings.getContextTypes();

	render() {
		return (
			<WebDialog
				actions={this.renderActions()}
				autoScrollBodyContent={true}
				bodyContent={this.renderBodyContent()}
				modal={false}
				open={!!this.context.settings.dialog}
				title={SETTINGS_DIALOG_TITLE}
			/>
		);
	}

	renderActions() {
		return (
			[
				<RaisedButton
					label={SETTINGS_DIALOG_SAVE_BUTTON_LABEL}
					keyboardFocused={true}
					onTouchTap={this.save}
					onClick={this.save}
					backgroundColor={green900}
					className={BUTTON_CLASSNAME}
					labelColor={grey300}
				/>,
				<RaisedButton
					label={SETTINGS_DIALOG_CANCEL_BUTTON_LABEL}
					keyboardFocused={false}
					onTouchTap={this.cancel}
					onClick={this.cancel}
					backgroundColor={red900}
					className={BUTTON_CLASSNAME}
					labelColor={grey300}
				/>
			]
		);
	}

	renderBodyContent() {
		return (
			<div>
				<Subheader inset={false} style={styles.settings.subheader}>Guesses allowed
					<RadioButtonGroup 
						name="guessesAllowed" 
						onChange={this.onChangeGuessesAllowed} 
						defaultSelected={this.state.guessesAllowed}
					>
						<RadioButton label="13" value={13} />
						<RadioButton label="10" value={10} />
						<RadioButton label="7" value={7} />
					</RadioButtonGroup>
				</Subheader>
				<Subheader inset={false} style={styles.settings.subheader}>Tiles
					<RadioButtonGroup 
						name="tiles" 
						onChange={this.onChangeTiles} 
						defaultSelected={this.state.tiles}
					>
						<RadioButton label="25" value={25} />
						<RadioButton label="50" value={50} />
						<RadioButton label="100" value={100} />
					</RadioButtonGroup>
				</Subheader>
			</div>
		);
	}

	onChangeGuessesAllowed(event, value) {
		this.setState({
			guessesAllowed: Number(value)
		})
	}

	onChangeTiles(event, value) {
		this.setState({
			tiles: Number(value)
		})
	}

};
