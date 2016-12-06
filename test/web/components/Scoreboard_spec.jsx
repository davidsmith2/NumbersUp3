import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {mount} from 'enzyme';

import {Scoreboard} from '../../../app/web/components/Scoreboard';
import {context} from '../../enzyme_context';

describe('Scoreboard', () => {

	it('renders the scoreboard sections', () => {
		const mountOptions = {
			context: context
		};
		mountOptions.context.game = {
			guessesAllowed: 13,
			guessesMade: 1
		};
		const component = mount(<Scoreboard />, mountOptions);
		expect(component.find('th').length).to.equal(5);
	});

});
