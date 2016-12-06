import React from 'react';
import {
	Text,
	View
} from 'react-native';

import {badges} from '../../core';
import {styles} from '../styles';

export class Scoreboard extends React.Component {
	static contextTypes = {
		game: React.PropTypes.object.isRequired
	};

	componentWillMount() {
		this.setState({
			currentGuess: this.context.game.currentGuess
		});
	}

	render() {
		return (
			<View style={[styles.helpers.flexDirection('row'), styles.game.scoreboard]}>
				<View style={styles.game.column}>
					{badges.map(this.renderTableHeaderColumn.bind(this))}
				</View>
				<View style={styles.game.column}>
					{badges.map(this.renderTableRowColumn.bind(this))}
				</View>
			</View>
		);
	}

	renderTableHeaderColumn(config, index) {
		return (
			<Text key={'thc' + index}>{config.rootContent}</Text>
		);
	}

	renderTableRowColumn(config, index) {
		let badgeContent = this.getBadgeContent(config.badgeContent);
		if (!Number.isInteger(badgeContent)) {
			badgeContent = this.getIcon(badgeContent);
		}
		return (
			<Text key={'trc' + index}>{badgeContent}</Text>
		);
	}

	getBadgeContent(config) {
		if (typeof config === 'string') {
			return this.context.game[config];
		}
		if (typeof config === 'function') {
			return config(this.context.game);
		}

	}

	getIcon(badgeContent) {
		let str = '';
		switch(badgeContent) {
			case 'arrow_downward':
				str = 'Low';
				break;
			case 'arrow_upward':
				str = 'High';
				break;
			case 'check':
				str = 'Match';
				break;
		}
		return str;
	}

}
