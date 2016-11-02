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
	const mountOptions = {
		context: {
			store: {
				dispatch() {}
			}
		}
	};

	it('tells the user if they\'ve won', () => {
		const state = {
			result: 'Win',
			secretNumber: 1
		};
		const component = mount(<Result data={state} />, mountOptions);
		expect(component.find('h1')).to.have.length(1);
		expect(component.find('h1').text()).to.equal('You Win');
	});

	it('tells the user if they\'ve lost', () => {
		const state = {
			result: 'Lose',
			secretNumber: 1
		};
		const component = mount(<Result data={state} />, mountOptions);
		expect(component.find('h1').text()).to.equal('You Lose');
	});

	it('tells the user the secret number', () => {
		const state = {
			secretNumber: 1
		};
		const component = mount(<Result data={state} />, mountOptions);
		expect(component.find('p')).to.have.length(1);
		expect(component.find('p').text()).to.equal('The secret number was 1.');
	});

});
