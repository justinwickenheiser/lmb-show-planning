import React from 'react';

export default function Nav(props) {

	if (props.isAuthenticated) {
		var login = (
			<li className="nav-item">
				<a className="nav-link" href="/logout">Logout</a>
			</li>
		);
	} else if (props.url[1] === 'login') {
		var login = (
			<li className="nav-item active">
				<a className="nav-link" href="/login">Login</a>
			</li>
		);
	} else {
		var login = (
			<li className="nav-item">
				<a className="nav-link" href="/login">Login</a>
			</li>
		);
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
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
		</nav>
	);
}