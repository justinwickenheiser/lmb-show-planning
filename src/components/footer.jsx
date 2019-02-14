import React from 'react';

export default function Footer(props) {
	return (
		<div className="footer">
			Copyright &copy; {new Date().getFullYear()} Justin Wickenheiser
		</div>
	);
}