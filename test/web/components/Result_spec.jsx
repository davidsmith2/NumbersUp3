import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import {Result} from '../../../app/web/components/Result';
import {WebDialog} from '../../../app/web/components/Dialog';

describe('Result', () => {
	const mountOptions = {
		context: {
			store: {
				dispatch() {}
			}
		}
	};

	it('tells the user if they\'ve won', () => {
		mountOptions.context.result = {
			dialog: 'result',
			result: 'Win',
			secretNumber: 1,
			tiles: [],
			saveGame: () => {}
		};
		const component = shallow(<Result />, mountOptions);
		expect(component.find(WebDialog).node.props.title).to.equal('You Win!');
	});

	it('tells the user if they\'ve lost', () => {
		mountOptions.context.result = {
			dialog: 'result',
			result: 'Lose',
			secretNumber: 1,
			tiles: [],
			saveGame: () => {}
		};
		const component = shallow(<Result />, mountOptions);
		expect(component.find(WebDialog).node.props.title).to.equal('You Lose!');
	});

	it('tells the user the secret number', () => {
		mountOptions.context.result = {
			secretNumber: 1,
			tiles: [],
			saveGame: () => {}
		};
		const component = shallow(<Result />, mountOptions);
		expect(component.find(WebDialog).dive().find('p').text()).to.equal('The secret number was 1.');
	});
});
