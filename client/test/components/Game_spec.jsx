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

import {Tiles} from '../../src/components/Tiles';

describe('Game', () => {

	it('renders tiles', () => {
		const mountOptions = {
			context: {
				store: {
					dispatch() {}
				}
			}
		};
		const state = {tiles: [1,2,3]};
		const component = mount(<Tiles data={state} />, mountOptions);
		expect(component.find('.tile').length).to.equal(3);
	});

});
