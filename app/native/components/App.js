import React from 'react';
import {
	Button,
	Text,
	TextInput,
	View
} from 'react-native';

import {App} from '../../components/App';
import {Game} from './Game';
import {NativeLogin} from './Login';
import {Splash} from './Splash';
import {NativeSettings} from './Settings';
import {Result} from './Result';

import {styles} from '../styles';

export class NativeApp extends App {
    static childContextTypes = App.getChildContextTypes();

	getSubcomponents() {
		return {
			game: Game,
			login: NativeLogin,
			splash: Splash,
			settings: NativeSettings,
			result: Result
		};
	}

	getWrapper(els) {
		return <View style={[styles.helpers.flexDirection('column'), styles.app.container]}>{els}</View>
	}

}
