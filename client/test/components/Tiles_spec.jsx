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

describe('Game', () => {

	it('renders tiles', () => {
		const mountOptions = {
			context: {
				store: {
					dispatch() {}
				}
			}
		};
		const state = {
			tiles: [1,2,3],
			guesses: []
		};
		const component = mount(<Tiles data={state} />, mountOptions);
		expect(component.find('.tile').length).to.equal(3);
	});

	it('handles numbers that have been guessed', () => {
		const mountOptions = {
			context: {
				store: {
					dispatch() {}
				}
			}
		};
		const state = {
			tiles: [1,2,3],
			secretNumber: 2,
			guesses: [{number: 1}]
		};
		const component = mount(<Tiles data={state} />, mountOptions);
		expect(component.find('.tileSpan').length).to.equal(1);
	});

});
