import React from 'react';
import {
	Button,
	TextInput
} from 'react-native';

import {Login} from '../../components/Login';
import {Dialog} from './Dialog';

import {
	LOGIN_DIALOG_TITLE,
	LOGIN_DIALOG_LOGIN_BUTTON_LABEL
} from '../../core'

import {styles} from '../styles';

export class NativeLogin extends Login {
    static contextTypes = Login.getContextTypes();

	render() {
		return (
			<Dialog
				headerContent={LOGIN_DIALOG_TITLE}
				bodyContent={this.renderBodyContent()}
				footerContent={this.renderFooterContent()}
			/>
		);
	}

	renderBodyContent() {
		return (
			<TextInput 
				style={styles.login.textInput}
				onChangeText={(user) => this.setState({user})}
				value={this.state.user}
			/>
		);
	}

	renderFooterContent() {
		return (
			<Button 
				onPress={this.login}
				title={LOGIN_DIALOG_LOGIN_BUTTON_LABEL}
			/>
		);
	}

}
