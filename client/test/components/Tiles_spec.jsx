import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithClass,
	Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List} from 'immutable';
import {mount} from 'enzyme';

import {Tiles} from '../../src/components/Tiles';

describe('Tiles', () => {

	it('renders guessed and unguessed numbers', () => {
		const mountOptions = {
			context: {
				store: {
					dispatch() {}
				}
			}
		};
		const state = {
			tiles: [{number: 1, guessAccuracy: 'Low'}, {number: 2}, {number: 3}],
			secretNumber: 2,
			guesses: [{number: 1}]
		};
		const component = mount(<Tiles data={state} />, mountOptions);
		expect(component.find('.gridTileContentLink').length).to.equal(2);
		expect(component.find('.gridTileContentVisited').length).to.equal(1);
	});

});
