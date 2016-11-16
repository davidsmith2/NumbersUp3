import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export class Login extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
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
			<FlatButton
				label='Login'
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.login}
				onClick={this.login}
				disabled={!this.state.user} />
		];
		return (
			<MuiThemeProvider>
				<Dialog
					title='Login'
					actions={actions}
					modal={false}
					open={this.props.open}
				>
					<TextField hintText="Your name" errorText={(!this.state.user) ? 'This field is required' : null} onKeyUp={this.onKeyUp.bind(this)} />
				</Dialog>
			</MuiThemeProvider>
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
