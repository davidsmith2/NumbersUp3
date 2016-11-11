import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Subheader from 'material-ui/Subheader';
import {
	green900,
	red900,
	grey300
} from 'material-ui/styles/colors';
import {bindAll} from 'lodash';

import {
	BUTTON_CLASSNAME,
	DIALOG_CLASSNAME,
	DIALOG_CONTENT_CLASSNAME,
	DIALOG_TITLE_CLASSNAME,
	DIALOG_BODY_CLASSNAME,
	DIALOG_ACTIONS_CONTAINER_CLASSNAME,
	SETTINGS_DIALOG_TITLE,
	SETTINGS_DIALOG_SAVE_BUTTON_LABEL,
	SETTINGS_DIALOG_CANCEL_BUTTON_LABEL
} from '../core';
import {styles} from '../styles';

export class Settings extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	bindAll(this, ['save', 'cancel', 'onChangeGuessesAllowed', 'onChangeTiles']);
    }

    componentWillMount() {
		this.setState({
			guessesAllowed: this.props.guessesAllowed,
			tiles: this.props.tiles
		});
    }

	render() {
		const actions = [
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
		];
		return (
			<Dialog
				title={SETTINGS_DIALOG_TITLE}
				actions={actions}
				modal={false}
				open={this.props.open}
				autoScrollBodyContent={true}
				className={DIALOG_CLASSNAME}
				contentClassName={DIALOG_CONTENT_CLASSNAME}
				titleClassName={DIALOG_TITLE_CLASSNAME}
				bodyClassName={DIALOG_BODY_CLASSNAME}
				actionsContainerClassName={DIALOG_ACTIONS_CONTAINER_CLASSNAME}
			>
				<Subheader inset={false} style={styles.settings.subheader}>Guesses allowed
					<RadioButtonGroup 
						name="guessesAllowed" 
						onChange={this.onChangeGuessesAllowed} 
						defaultSelected={this.props.guessesAllowed}
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
						defaultSelected={this.props.tiles}
					>
						<RadioButton label="25" value={25} />
						<RadioButton label="50" value={50} />
						<RadioButton label="100" value={100} />
					</RadioButtonGroup>
				</Subheader>
			</Dialog>
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

	save() {
		this.context.store.dispatch({
			type: 'SAVE_SETTINGS',
			data: {
				guessesAllowed: this.state.guessesAllowed,
				tiles: this.state.tiles
			}
		});
	}

	cancel() {
		this.context.store.dispatch({
			type: 'CANCEL_SETTINGS'
		});
	}
};
