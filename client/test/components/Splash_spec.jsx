import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dialog from 'material-ui/Dialog';

import {Splash} from '../../src/components/Splash';

describe('Splash', () => {
	const mountOptions = {
		context: {
			store: {
				dispatch() {}
			}
		}
	};

	it('is shown if game has not started', () => {
		const dialog = 'splash';
		const component = shallow(<Splash open={!!dialog} />, mountOptions);
		expect(component.find(Dialog).node.props.open).to.equal(true);
	});

	it('is hidden if game has started', () => {
		const dialog = false;
		const component = shallow(<Splash open={!!dialog} />, mountOptions);
		expect(component.find(Dialog).node.props.open).to.equal(false);
	});

});
