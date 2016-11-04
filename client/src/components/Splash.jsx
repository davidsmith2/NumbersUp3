import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export class Splash extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

    constructor(props, context) {
    	super(props, context);
    	this.play = this.play.bind(this);
    }

	render() {
		const actions = [
			<FlatButton
				label='Play'
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.play} />
		];
		return (
			<MuiThemeProvider>
				<Dialog
					title='Numbers Up'
					actions={actions}
					modal={false}
					open={!this.props.data.started}
					onRequestClose={this.play}>
					tktktk tktktk tktktk tktktk tktktk
				</Dialog>
			</MuiThemeProvider>
		);

	}

	play() {
		this.context.store.dispatch({
			type: 'PLAY'
		});
	}
};
