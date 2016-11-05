import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Subheader from 'material-ui/Subheader';
import {bindAll} from 'lodash';

import {
	SETTINGS_DIALOG_TITLE,
	SETTINGS_DIALOG_SAVE_BUTTON_LABEL,
	SETTINGS_DIALOG_CANCEL_BUTTON_LABEL
} from '../core';

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
			<FlatButton
				label={SETTINGS_DIALOG_SAVE_BUTTON_LABEL}
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.save}
				onClick={this.save} />,
			<FlatButton
				label={SETTINGS_DIALOG_CANCEL_BUTTON_LABEL}
				primary={false}
				keyboardFocused={false}
				onTouchTap={this.cancel}
				onClick={this.cancel} />
		];
		return (
			<MuiThemeProvider>
				<Dialog
					title={SETTINGS_DIALOG_TITLE}
					actions={actions}
					modal={false}
					open={this.props.open}>
					<Subheader inset={false}>Guesses allowed
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
					<Subheader inset={false}>Tiles
						<RadioButtonGroup 
							name="tiles" 
							onChange={this.onChangeTiles} 
							defaultSelected={this.props.tiles}
						>
							<RadioButton label="100" value={100} />
							<RadioButton label="50" value={50} />
							<RadioButton label="25" value={25} />
						</RadioButtonGroup>
					</Subheader>
				</Dialog>
			</MuiThemeProvider>
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
