import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {expect} from 'chai';

import {Scoreboard} from '../../src/components/Scoreboard';

describe('Scoreboard', () => {

	it('renders the scoreboard sections', () => {
		const state = {
			guessesAllowed: 13,
			guessesMade: 1
		};
		const component = renderIntoDocument(<Scoreboard data={state} />);
		const sections = scryRenderedDOMComponentsWithClass(component, 'scoreboardSection');
		expect(sections.length).to.equal(5);
	});

});
