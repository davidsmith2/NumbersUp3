import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithClass,
	Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List} from 'immutable';

import Game from '../../src/components/Game';

describe('Game', () => {

	it('renders tiles', () => {
		const tiles = [1,2,3];
		const component = renderIntoDocument(
			<Game tiles={tiles} />
		);
		const els = scryRenderedDOMComponentsWithClass(component, 'tile');
		expect(els.length).to.equal(3);
	});

	it('invokes the guess callback when a tile is clicked', () => {
		let currentGuess;
		const guess = (number) => currentGuess = number;
		const tiles = [1,2,3];
		const component = renderIntoDocument(
			<Game tiles={tiles} guess={guess} />
		);
		const els = scryRenderedDOMComponentsWithClass(component, 'tileLink');
		Simulate.click(els[0]);
		expect(currentGuess).to.equal(1);
	});

});
