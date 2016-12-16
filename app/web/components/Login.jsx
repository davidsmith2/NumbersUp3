import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
	green700,
	green900,
	grey300,
	grey500,
	red900
} from 'material-ui/styles/colors';

import {Login} from '../../components/Login';
import {
	BUTTON_CLASSNAME,
	LOGIN_DIALOG_TITLE,
	LOGIN_DIALOG_LOGIN_BUTTON_LABEL,
	LOGIN_DIALOG_TEXT_FIELD_HINT_TEXT,
	LOGIN_DIALOG_TEXT_FIELD_ERROR_TEXT
} from '../../core';
import {WebDialog} from './Dialog';

export class WebLogin extends Login {
    static contextTypes = Login.getContextTypes({
        muiTheme: React.PropTypes.object
    });

	render() {
		return (
			<WebDialog
				actions={this.renderActions()}
				bodyContent={this.renderBodyContent()}
				modal={false}
				open={!this.context.login.user}
				title={LOGIN_DIALOG_TITLE}
			/>
		);
	}

	renderActions() {
		return (
			[
				<RaisedButton
					label={LOGIN_DIALOG_LOGIN_BUTTON_LABEL}
					keyboardFocused={true}
					onTouchTap={this.login}
					onClick={this.login}
					disabled={!this.state.user}
					backgroundColor={green900}
					className={BUTTON_CLASSNAME}
					labelColor={grey300}
				 />
			]
		);
	}

	renderBodyContent() {
		return (
			<TextField 
				name="user"
				hintText={LOGIN_DIALOG_TEXT_FIELD_HINT_TEXT}
				errorText={(!this.state.user) ? LOGIN_DIALOG_TEXT_FIELD_ERROR_TEXT : null} 
				onKeyUp={this.onKeyUp.bind(this)}
				inputStyle={{color: grey300}}
				hintStyle={{color: grey500}}
				errorStyle={{color: red900}}
				underlineStyle={{borderColor: green900}}
				underlineFocusStyle={{borderColor: green700}}
			 />
		);
	}

	onKeyUp(e) {
		this.setState({
			user: e.target.value
		});
	}

}
