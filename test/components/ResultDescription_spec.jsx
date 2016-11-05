import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';

import {ResultDescription} from '../../src/components/ResultDescription';

describe('ResultDescription', () => {

	it('tells the user the secret number', () => {
		const component = mount(<ResultDescription secretNumber={1} />);
		expect(component.find('p').text()).to.equal('The secret number was 1.');
	});

});
