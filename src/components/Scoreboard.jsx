import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
	Table, 
	TableBody, 
	TableHeader, 
	TableHeaderColumn, 
	TableRow, 
	TableRowColumn
} from 'material-ui/Table';
import {wrap} from 'lodash';

import {getGuessAccuracyIconName} from '../core';

const styles = {
	container: {
		margin: '10px 0'
	}
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
				<div className="scoreboard" key="scoreboard" style={styles.container}>
					<Table>
						<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
							<TableRow>
								{this.badges.map(this.renderTableHeaderColumn.bind(this))}
							</TableRow>
						</TableHeader>
						<TableBody displayRowCheckbox={false}>
							<TableRow>
								{this.badges.map(this.renderTableRowColumn.bind(this))}
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</MuiThemeProvider>
		);
	}

	renderTableHeaderColumn(config, index) {
		return (
			<TableHeaderColumn key={'thc' + index} style={{textAlign: 'center'}}>{config.rootContent}</TableHeaderColumn>
		);
	}

	renderTableRowColumn(config, index) {
		return (
			<TableRowColumn key={'trc' + index} style={{textAlign: 'center'}}>{this.getBadgeContent(config.badgeContent)}</TableRowColumn>
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
