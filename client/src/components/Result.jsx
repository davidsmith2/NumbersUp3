import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {ResultDescription} from './ResultDescription';


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
					title={'You ' + this.props.result}
					actions={actions}
					modal={false}
					open={!!this.props.result}
					onRequestClose={this.replay}>
					<ResultDescription secretNumber={this.props.secretNumber} />
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
