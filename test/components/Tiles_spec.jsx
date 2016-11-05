import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';

import {Tiles} from '../../src/components/Tiles';

describe('Tiles', () => {

	it('renders guessed and unguessed numbers', () => {
		const mountOptions = {
			context: {
				store: {
					dispatch() {}
				}
			}
		};
		const tiles = [{number: 1, guessAccuracy: 'Low'}, {number: 2}, {number: 3}];
		const component = mount(<Tiles tiles={tiles} />, mountOptions);
		expect(component.find('.gridTileContentLink').length).to.equal(2);
		expect(component.find('.gridTileContentVisited').length).to.equal(1);
	});

});
