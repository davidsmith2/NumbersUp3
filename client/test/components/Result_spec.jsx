import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dialog from 'material-ui/Dialog';

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
		const component = shallow(<Result data={state} />, mountOptions);
		expect(component.find(Dialog).node.props.title).to.equal('You Win');
	});

	it('tells the user if they\'ve lost', () => {
		const state = {
			result: 'Lose',
			secretNumber: 1
		};
		const component = shallow(<Result data={state} />, mountOptions);
		expect(component.find(Dialog).node.props.title).to.equal('You Lose');
	});

});
