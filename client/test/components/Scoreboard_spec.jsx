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

import {Scoreboard} from '../../src/components/Scoreboard';

describe('Scoreboard', () => {

	it('renders', () => {
		const state = {
			currentGuess: 1,
			guessAccuracy: 'Low',
			guessesAllowed: 13,
			guessesMade: 1,
			result: false
		};
		const component = renderIntoDocument(<Scoreboard data={state} />);
		const sections = scryRenderedDOMComponentsWithClass(component, 'scoreboardSection');
		expect(sections.length).to.equal(6);
	});

});
