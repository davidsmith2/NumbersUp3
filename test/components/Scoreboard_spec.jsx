import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {mount} from 'enzyme';

import {Scoreboard} from '../../src/components/Scoreboard';
import {context} from '../enzyme_context';

describe('Scoreboard', () => {

	it('renders the scoreboard sections', () => {
		const mountOptions = {
			context: context
		};
		const state = {
			guessesAllowed: 13,
			guessesMade: 1
		};
		const component = mount(<Scoreboard game={state} />, mountOptions);
		expect(component.find('th').length).to.equal(5);
	});

});
