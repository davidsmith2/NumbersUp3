import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
	green700,
	green900,
	grey300,
	grey500,
	red900
} from 'material-ui/styles/colors';

import {
	BUTTON_CLASSNAME,
	DIALOG_CLASSNAME,
	DIALOG_CONTENT_CLASSNAME,
	DIALOG_TITLE_CLASSNAME,
	DIALOG_BODY_CLASSNAME,
	DIALOG_ACTIONS_CONTAINER_CLASSNAME,
	LOGIN_DIALOG_TITLE,
	LOGIN_DIALOG_LOGIN_BUTTON_LABEL,
	LOGIN_DIALOG_TEXT_FIELD_HINT_TEXT,
	LOGIN_DIALOG_TEXT_FIELD_ERROR_TEXT
} from '../core';

export class Login extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired,
        muiTheme: React.PropTypes.object
    };

    constructor(props, context) {
    	super(props, context);
    	this.login = this.login.bind(this);
    }

    componentWillMount() {
    	this.setState({
    		user: ''
    	});
    }

	render() {
		const actions = [
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
		];
		return (
			<Dialog
				title={LOGIN_DIALOG_TITLE}
				actions={actions}
				modal={false}
				open={this.props.open}
				className={DIALOG_CLASSNAME}
				contentClassName={DIALOG_CONTENT_CLASSNAME}
				titleClassName={DIALOG_TITLE_CLASSNAME}
				bodyClassName={DIALOG_BODY_CLASSNAME}
				actionsContainerClassName={DIALOG_ACTIONS_CONTAINER_CLASSNAME}
			>
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
			</Dialog>
		);
	}

	onKeyUp(e) {
		this.setState({
			user: e.target.value
		});
	}

	login() {
		this.context.store.dispatch({
			type: 'LOGIN',
			user: this.state.user
		});
	}

}
