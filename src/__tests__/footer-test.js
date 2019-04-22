import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Footer from '../components/Footer';

describe('A Footer component', function() {
	it('should render without throwing an error', function() {
		expect(shallow(<Footer />).contains(<div className="footer">Copyright &copy; {new Date().getFullYear()} Justin Wickenheiser</div>)).toBe(true);
	});

	it('should be selectable by class "footer"', function() {
		expect(shallow(<Footer />).is('.footer')).toBe(true);
	});

	it('should render to static HTML', function() {
		expect(render(<Footer />).text()).toEqual('Copyright © 2019 Justin Wickenheiser');
	});
});