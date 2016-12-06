import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Tiles} from '../../../app/web/components/Tiles';
import {context} from '../../enzyme_context';

describe('Tiles', () => {

	beforeEach(() => {
		injectTapEventPlugin();
	});

	it('renders guessed and unguessed numbers', () => {
		const mountOptions = {
			context: context
		};
		mountOptions.context.game = {
			tiles: [{number: 1, guessAccuracy: 'Low'}, {number: 2}, {number: 3}]
		};
		const component = mount(<Tiles />, mountOptions);
		expect(component.find('.tile.tile-outer').length).to.equal(3);
		expect(component.find('.tile.tile-inner').length).to.equal(3);
		expect(component.find('.tile.tile-inner.visited').length).to.equal(1);
	});

});
