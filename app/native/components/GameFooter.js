import React from 'react';
import {
	Button,
	View
} from 'react-native';

import {
	QUIT_BUTTON_LABEL
} from '../../core';
import {styles} from '../styles';

export class GameFooter extends React.Component {
	static contextTypes = {
		game: React.PropTypes.object.isRequired
	};

	render() {
		return (
			<View>
				<Button 
					key='quit'
					onPress={this.quit.bind(this)}
					title={QUIT_BUTTON_LABEL}
					style={styles.helpers.flexDirection('column')}
				/>
			</View>
		);
	}

	quit() {
		this.context.game.quit();
	}

}