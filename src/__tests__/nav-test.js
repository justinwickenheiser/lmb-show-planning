import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Nav from '../components/Nav';

describe('A Nav component', function() {
	it('should render with 4 menu items', function() {
		
		var login = (
			<li className="nav-item">
				<a className="nav-link" href="/logout">Logout</a>
			</li>
		);
		var props = {
			url: "/",
			isAuthenticated: true
		};

		expect(shallow(<Nav url={"/"} isAuthenticated={true} />).contains(<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					{props.url[1] === "" ? (
						<li className="nav-item active">
							<a className="nav-link" href="/">Home</a>
						</li>
					) : (
						<li className="nav-item">
							<a className="nav-link" href="/">Home</a>
						</li>
					)}
					{props.url[1] === 'library' ? (
						<li className="nav-item active">
							<a className="nav-link" href="/library">Music Library</a>
						</li>
					) : (
						<li className="nav-item">
							<a className="nav-link" href="/library">Music Library</a>
						</li>
					)}
					{props.url[1] === 'shows' ? (
						<li className="nav-item active">
							<a className="nav-link" href="/shows">Shows</a>
						</li>
					) : (
						<li className="nav-item">
							<a className="nav-link" href="/shows">Shows</a>
						</li>
					)}
					{login}
				</ul>
  			</div>
		</nav>)).toBe(true);
	});

	it('should be selectable by class "navbar"', function() {
		expect(shallow(<Nav url={"/"} isAuthenticated={true} />).is('.navbar')).toBe(true);
	});
});