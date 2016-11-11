import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
	grey300,
	red900
} from 'material-ui/styles/colors';

import {
	BUTTON_CLASSNAME,
	QUIT_BUTTON_LABEL
} from '../core';
import {styles} from '../styles';

export class Buttons extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired,
        muiTheme: React.PropTypes.object
    };

    constructor(props, context) {
    	super(props, context);
    }

	render() {
		return(
			<div style={styles.buttons.container}>
				<RaisedButton
					label={QUIT_BUTTON_LABEL}
					keyboardFocused={false}
					onTouchTap={this.quit.bind(this)}
					onClick={this.quit.bind(this)}
					backgroundColor={red900}
					className={BUTTON_CLASSNAME}
					labelColor={grey300}
				/>
			</div>
		);
	}

	quit() {
		this.context.store.dispatch({
			type: 'QUIT'
		});
	}

};
