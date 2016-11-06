import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';

import {Scoreboard} from '../../src/components/Scoreboard';

describe('Scoreboard', () => {

	it('renders the scoreboard sections', () => {
		const state = {
			guessesAllowed: 13,
			guessesMade: 1
		};
		const component = renderIntoDocument(<Scoreboard game={state} />);
		const sections = scryRenderedDOMComponentsWithTag(component, 'th');
		expect(sections.length).to.equal(5);
	});

});
