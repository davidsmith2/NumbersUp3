import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List} from 'immutable';
import {mount} from 'enzyme';

import {Result} from '../../src/components/Result';

describe('Result', () => {

	it('tells the user if they\'ve won', () => {
		const state = {
			result: 'Win',
			secretNumber: 1
		};
		const component = renderIntoDocument(<Result data={state} />);
		const headings = scryRenderedDOMComponentsWithTag(component, 'h1');
		expect(headings[0].textContent).to.equal('You Win');
	});

	it('tells the user if they\'ve lost', () => {
		const state = {
			result: 'Lose',
			secretNumber: 1
		};
		const component = renderIntoDocument(<Result data={state} />);
		const els = scryRenderedDOMComponentsWithTag(component, 'h1');
		expect(els[0].textContent).to.equal('You Lose');
	});

	it('tells the user the secret number', () => {
		const state = {
			secretNumber: 1
		};
		const component = renderIntoDocument(<Result data={state} />);
		const els = scryRenderedDOMComponentsWithTag(component, 'p');
		expect(els[0].textContent).to.equal('The secret number was 1.');
	});

});
