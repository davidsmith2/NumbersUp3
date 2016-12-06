import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {App} from '../../components/App';
import {Game} from './Game';
import {WebLogin} from './Login';
import {Splash} from './Splash';
import {WebSettings} from './Settings';
import {Result} from './Result';

import {muiTheme} from '../muiTheme';

export class WebApp extends App {
    static childContextTypes = App.getChildContextTypes({
        muiTheme: React.PropTypes.object
    });

    constructor(props) {
    	super(props);
		injectTapEventPlugin();
    }

    getChildContext() {
    	return super.getChildContext({
    		muiTheme: muiTheme
    	});
    }

	getSubcomponents() {
		return {
			game: Game,
			login: WebLogin,
			splash: Splash,
			settings: WebSettings,
			result: Result
		};
	}

	getWrapper(els) {
		return <div>{els}</div>
	}

}
