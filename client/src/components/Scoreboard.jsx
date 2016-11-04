import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Badge from 'material-ui/Badge';
import {wrap} from 'lodash';

import {getGuessAccuracyIconName} from '../core';

const styles = {
	float: 'right', 
	width: '200px', 
	marginRight: '20px'
};

const getCurrentGuessBadgeContent = (game) => {
	return game.currentGuess || '-';

};

const getGuessAccuracyBadgeContent = (func, game) => {
	if (!game.guessAccuracy) {
		return '-';
	}
	return (<i className="material-icons">{func(game.guessAccuracy)}</i>);
};

const getGuessesRemainingBadgeContent = (game) => {
	return game.guessesAllowed - game.guessesMade;
};

export class Scoreboard extends React.Component {
	badges = [
		{
			rootContent: 'Current',
			badgeContent: getCurrentGuessBadgeContent
		},
		{
			rootContent: 'Accuracy',
			badgeContent: wrap(getGuessAccuracyIconName, getGuessAccuracyBadgeContent)
		},
		{
			rootContent: 'Allowed',
			badgeContent: 'guessesAllowed'
		},
		{
			rootContent: 'Made',
			badgeContent: 'guessesMade'
		},
		{
			rootContent: 'Remaining',
			badgeContent: getGuessesRemainingBadgeContent
		}
	];

	render() {
		return (
			<MuiThemeProvider>
				<div className="scoreboard" style={styles}>
					{this.badges.map(this.renderBadge.bind(this))}
				</div>
			</MuiThemeProvider>
		);
	}

	renderBadge(config) {
		const styles = {
			root: {
				display: 'block', 
				paddingLeft: '3em'
			},
			badge: {
				width: '42px',
				height: '42px',
				left: 0,
				top: '1em'
			}
		};
		return (
			<Badge badgeContent={this.getBadgeContent(config.badgeContent)} badgeStyle={styles.badge} className="scoreboardSection" key={config.rootContent} primary={true} style={styles.root}>
				{config.rootContent}
			</Badge>
		);
	}

	getBadgeContent(config) {
		if (typeof config === 'string') {
			return this.props.game[config];
		}
		if (typeof config === 'function') {
			return config(this.props.game);
		}

	}

}
