import React from 'react';

import {Game} from './Game';
import {Result} from './Result';

export class App extends React.Component {
	render() {
		let els = [];
		els.push(<Game key="game" data={this.props} />);
		if (this.props.result) {
			els.push(<Result key="result" data={this.props} />)
		}
		return <div>{els}</div>
	}
}
