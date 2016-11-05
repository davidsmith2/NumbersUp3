import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Subheader from 'material-ui/Subheader';

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
    	this.save = this.save.bind(this);
    	this.cancel = this.cancel.bind(this);
    	this.onChange = this.onChange.bind(this);
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
							onChange={this.onChange} 
							defaultSelected={this.props.guessesAllowed}
						>
							<RadioButton label="13" value={13} />
							<RadioButton label="10" value={10} />
							<RadioButton label="7" value={7} />
						</RadioButtonGroup>
					</Subheader>
				</Dialog>
			</MuiThemeProvider>
		);

	}

	onChange(event, value) {
		this.setState({
			guessesAllowed: Number(value)
		})
	}

	save() {
		this.context.store.dispatch({
			type: 'SAVE_SETTINGS',
			guessesAllowed: this.state.guessesAllowed
		});
	}

	cancel() {
		this.context.store.dispatch({
			type: 'CANCEL_SETTINGS'
		});
	}
};
