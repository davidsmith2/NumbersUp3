import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Badge from 'material-ui/Badge';
import {wrap} from 'lodash';

import {getGuessAccuracyIconName} from '../common';

const getGuessAccuracyBadgeContent = (func, state) => {
	if (!state.guessAccuracy) {
		return '-';
	}
	return (<i className="material-icons">{func(state.guessAccuracy)}</i>);
};

export class Scoreboard extends React.Component {
	badges = [
		{
			rootContent: 'Current',
			badgeContent: function(state) {
				return state.currentGuess || '-';
			}
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
			badgeContent: function(state) {
				return state.guessesAllowed - state.guessesMade;
			}
		}
	];

	render() {
		return (
			<MuiThemeProvider>
				<div className="scoreboard" style={{float: 'right', width: '200px', marginRight: '20px'}}>
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
			return this.props.data[config];
		}
		if (typeof config === 'function') {
			return config(this.props.data);
		}

	}

}
