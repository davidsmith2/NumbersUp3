import React from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {ResultDescription} from './ResultDescription';

injectTapEventPlugin();

export class Result extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	this.replay = this.replay.bind(this);
    }

	render() {
		const actions = [
			<FlatButton
				label='Replay'
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.replay} />
		];
		return (
			<MuiThemeProvider>
				<Dialog
					title={'You ' + this.props.data.result}
					actions={actions}
					modal={false}
					open={!!this.props.data.result}
					onRequestClose={this.replay}>
					<ResultDescription secretNumber={this.props.data.secretNumber} />
				</Dialog>
			</MuiThemeProvider>
		);
	}

	replay() {
		this.context.store.dispatch({
			type: 'REPLAY'
		});
	}

}
