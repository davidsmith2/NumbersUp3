import React from 'react';

export class Result extends React.Component {
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

	render() {
		return(
			<div>
				<h1>You {this.props.data.result}</h1>
				<p>The secret number was {this.props.data.secretNumber}.</p>
				<button onClick={() => this.replay()}>Replay</button>
			</div>
		);
	}

	replay() {
		this.context.store.dispatch({
			type: 'REPLAY'
		});
	}

}