import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Header from '../components/Header';

describe('A Header component', function() {
	it('should render without throwing an error', function() {
		expect(shallow(<Header />).contains(<div className="header-text">
			<div className="headerTitle">
				<h1>Laker Marching Band</h1>
			</div>
			<div className="headerSubTitle">
				<h2>Show Planner</h2>
			</div>
		</div>)).toBe(true);
	});

	it('should be selectable by class "header-text"', function() {
		expect(shallow(<Header />).is('.header-text')).toBe(true);
	});
});