import React from 'react';
import {
	Table, 
	TableBody, 
	TableHeader, 
	TableHeaderColumn, 
	TableRow, 
	TableRowColumn
} from 'material-ui/Table';

import {badges} from '../../core';
import {styles} from '../styles';

export class Scoreboard extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired,
        muiTheme: React.PropTypes.object,
        game: React.PropTypes.object.isRequired
    };

	render() {
		return (
			<div className="scoreboard" key="scoreboard" style={styles.scoreboard.container}>
				<Table>
					<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
						<TableRow>
							{badges.map(this.renderTableHeaderColumn.bind(this))}
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						<TableRow selectable={false} style={styles.scoreboard.tableRow}>
							{badges.map(this.renderTableRowColumn.bind(this))}
						</TableRow>
					</TableBody>
				</Table>
			</div>
		);
	}

	renderTableHeaderColumn(config, index) {
		return (
			<TableHeaderColumn 
				key={'thc' + index}
				style={styles.scoreboard.tableHeaderColumn}
			>
				{config.rootContent}
			</TableHeaderColumn>
		);
	}

	renderTableRowColumn(config, index) {
		let badgeContent = this.getBadgeContent(config.badgeContent);
		if (!Number.isInteger(badgeContent)) {
			badgeContent = this.getIcon(badgeContent);
		}
		return (
			<TableRowColumn 
				key={'trc' + index}
				style={styles.scoreboard.tableRowColumn}
			>
				{badgeContent}
			</TableRowColumn>
		);
	}

	renderBadge(config) {
		return (
			<Badge 
				badgeContent={this.getBadgeContent(config.badgeContent)} 
				badgeStyle={styles.badge.badge} 
				className="scoreboardSection" 
				key={config.rootContent} 
				primary={true} 
				style={styles.badge.root}
			>
				{config.rootContent}
			</Badge>
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
		return (
			<i className="material-icons">
				{badgeContent}
			</i>
		);
	}

}
