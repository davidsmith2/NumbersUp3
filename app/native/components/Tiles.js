import React from 'react';
import {
	Text,
	TouchableHighlight,
	View
} from 'react-native';

import {styles} from '../styles';
import {badges} from '../../core';

export class Tiles extends React.Component {
	static contextTypes = {
		game: React.PropTypes.object.isRequired
	};

	render() {
		return (
			<View style={styles.game.tiles}>
				<View style={styles.game.grid}>
					{this.context.game.tiles.map(this.renderTile.bind(this))}
				</View>
			</View>
		);
	}

	renderTile(tile, idx) {
		return (
			<View key={String(tile.number)} style={styles.game.cell}>
				<TouchableHighlight onPress={this.guess.bind(this, tile)}>
					<Text style={{textAlign: 'center'}}>
						{String(tile.number)}
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	guess(tile) {
		this.setState({
			currentGuess: tile.number
		});
		this.context.game.guess(tile);
	}

}