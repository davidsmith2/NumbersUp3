import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dialog from 'material-ui/Dialog';

import {Result} from '../../../app/web/components/Result';

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
		expect(component.find(Dialog).node.props.title).to.equal('You Win!');
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
		expect(component.find(Dialog).node.props.title).to.equal('You Lose!');
	});

	it('tells the user the secret number', () => {
		mountOptions.context.result = {
			secretNumber: 1,
			tiles: [],
			saveGame: () => {}
		};
		const component = shallow(<Result />, mountOptions);
		expect(component.find('p').text()).to.equal('The secret number was 1.');
	});
});
