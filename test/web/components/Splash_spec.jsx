import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dialog from 'material-ui/Dialog';

import {Splash} from '../../../app/web/components/Splash';

describe('Splash', () => {
	const mountOptions = {
		context: {
			store: {
				dispatch() {}
			}
		}
	};

	it('is shown if game has not started', () => {
		mountOptions.context.splash = {
			dialog: 'splash'
		};
		const component = shallow(<Splash />, mountOptions);
		expect(component.find(Dialog).node.props.open).to.equal(true);
	});

	it('is hidden if game has started', () => {
		mountOptions.context.splash = {
			dialog: false
		};
		const component = shallow(<Splash />, mountOptions);
		expect(component.find(Dialog).node.props.open).to.equal(false);
	});

});
