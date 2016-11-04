import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Game} from './Game';
import {Result} from './Result';
import {Splash} from './Splash';

export class App extends React.Component {
    constructor(props) {
    	super(props);
		injectTapEventPlugin();
    }

	render() {
		let els = [];
		if (!this.props.started) {
			els.push(<Splash key="splash" data={this.props} />)
		}
		if (this.props.result) {
			els.push(<Result key="result" data={this.props} />)
		}
		els.push(<Game key="game" data={this.props} />);
		return <div>{els}</div>
	}
}
