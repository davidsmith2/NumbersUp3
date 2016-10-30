import React from 'react';

import {Game} from './Game';

export class App extends React.Component {
	render() {
		return <div>
			<Game data={this.props} />
		</div>;
	}
}
