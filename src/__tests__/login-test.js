import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Login from '../components/Login';

describe('A Login component', function() {
	it('should render with 4 menu items', function() {
		expect(shallow(<Login />).contains(<div className="container">
			<h1>Login</h1>
			<div className="loginContainer">
				<form method="post" action="/login">
					<p className="form-group">
						<label htmlFor="username">
							Username<span className="req">*</span>
						</label>
						<input type="text" id="username" name="username" className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="password">
							Password<span className="req">*</span>
						</label>
						<input type="password" id="password" name="password" className="form-control" />
					</p>

					<p className="form-group loginSubmit">
						<input type="submit" defaultValue="Submit" className="btn btn-primary" />
					</p>
				</form>
			</div>
		</div>)).toBe(true);
	});

	it('should be selectable by class "container"', function() {
		expect(shallow(<Login />).is('.container')).toBe(true);
	});
});