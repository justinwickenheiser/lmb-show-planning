import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Home from '../components/Home';

describe('A Home component', function() {
	it('should render without throwing an error', function() {
		expect(shallow(<Home />).contains(<div className="container">
			<h3>Show Planner API</h3>

			<p>
				There are 5 API endpoints for this application.
			</p>
			<ul>
				<li>/songs.json</li>
				<li>/songs/#.json</li>
				<li>/shows.json</li>
				<li>/shows/#.json</li>
				<li>/shows/#/selected_songs.json</li>
			</ul>

			<strong>/songs.json</strong>
			<p>
				Returns a list of all songs in the system as an array of song objects.
			</p>
			<div className="cf-code-block cf-white">
				[<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"song_id":1,<br />
				&emsp;&emsp;"title":"Saturday Night's Alright (for fighting)",<br />
				&emsp;&emsp;"arranger":"Tom Wallace",<br />
				&emsp;&emsp;"song_length":"2:11",<br />
				&emsp;&emsp;"audio":"https://www.jwpepper.com/sheet-music/media-player.jsp?&type=audio&productID=10359781"<br />
				&emsp;{'}'},<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"song_id":2,<br />
				&emsp;&emsp;"title":"24K Magic",<br />
				&emsp;&emsp;"arranger":"Tom Wallace",<br />
				&emsp;&emsp;"song_length":"1:54",<br />
				&emsp;&emsp;"audio":"https://www.jwpepper.com/sheet-music/media-player.jsp?&type=audio&productID=10740870"<br />
				&emsp;{'}'},<br />
				&emsp;...<br />
				]
			</div>

			<strong>/songs/#.json</strong>
			<p>
				Returns an array of 1 song object. The object is of the specified song_id.
			</p>
			<div className="cf-code-block cf-white">
				[<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"song_id":3,<br />
				&emsp;&emsp;"title":"Abc",<br />
				&emsp;&emsp;"arranger":"Michael Sweeney",<br />
				&emsp;&emsp;"song_length":"1:52",<br />
				&emsp;&emsp;"audio":"https://www.jwpepper.com/sheet-music/media-player.jsp?&type=audio&productID=2462703"<br />
				&emsp;{'}'}<br />
				]
			</div>

			<strong>/shows.json</strong>
			<p>
				Returns a list of all shows in the system as an array of show objects.
			</p>
			<div className="cf-code-block cf-white">
				[<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"show_id":7,<br />
				&emsp;&emsp;"title":"Show Stoppers",<br />
				&emsp;&emsp;"details":"Family Day",<br />
				&emsp;&emsp;"season":"2019",<br />
				&emsp;&emsp;"show_number":"3",<br />
				&emsp;&emsp;"date":"9/15/2019"<br />
				&emsp;{'}'},<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"show_id":9,<br />
				&emsp;&emsp;"title":"A second show",<br />
				&emsp;&emsp;"details":"Band Day",<br />
				&emsp;&emsp;"season":"2018",<br />
				&emsp;&emsp;"show_number":"2",<br />
				&emsp;&emsp;"date":"8/30/2018"<br />
				&emsp;{'}'},<br />
				...<br />
				]
			</div>

			<strong>/shows/#.json</strong>
			<p>
				Returns an array of 1 show object. The object is of the specified show_id.
			</p>
			<div className="cf-code-block cf-white">
				[<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"show_id":9,<br />
				&emsp;&emsp;"title":"A second show",<br />
				&emsp;&emsp;"details":"Band Day",<br />
				&emsp;&emsp;"season":"2018",<br />
				&emsp;&emsp;"show_number":"2",<br />
				&emsp;&emsp;"date":"8/30/2018"<br />
				&emsp;{'}'}<br />
				]
			</div>

			<strong>/shows/#/selected_songs.json</strong>
			<p>
				Returns a list of the songs that are associated with the specified show as an array of custom song objects. These custom song objects list the show_id, song_id, and the primary key id for the join table.
			</p>
			<div className="cf-code-block cf-white">
				[<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"show_song_id":25,<br />
				&emsp;&emsp;"show_id":"7",<br />
				&emsp;&emsp;"song_id":"2"<br />
				&emsp;{'}'},<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"show_song_id":26,<br />
				&emsp;&emsp;"show_id":"7",<br />
				&emsp;&emsp;"song_id":"3"<br />
				&emsp;{'}'},<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"show_song_id":27,<br />
				&emsp;&emsp;"show_id":"7",<br />
				&emsp;&emsp;"song_id":"5"<br />
				&emsp;{'}'},<br />
				&emsp;{'{'}<br />
				&emsp;&emsp;"show_song_id":28,<br />
				&emsp;&emsp;"show_id":"7",<br />
				&emsp;&emsp;"song_id":"6"<br />
				&emsp;{'}'}<br />
				]
			</div>

			

			<strong>Using the API</strong>
			<p>
				Simply make an AJAX request and hit one of the endpoints. This application sets the state to the result.
			</p>
			<div className="cf-code-block">
				axios<span className="cf-red">.</span>get<span className="cf-white">(</span><span className="cf-yellow">'/songs.json'</span><span className="cf-white">)</span><br />
				&emsp;<span className="cf-red">.</span>then<span className="cf-white">(</span><span className="cf-purple">res</span> => <span className="cf-white">{'{'}</span><br />
				&emsp;&emsp;this<span className="cf-red">.</span>setState<span className="cf-white">({'{'}</span> <span className="cf-yellow">songs</span><span className="cf-purple">:</span> res<span className="cf-red">.</span>data <span className="cf-white">{'}'});</span><br />
				&emsp;<span className="cf-white">{'}'})</span><br />
				&emsp;<span className="cf-red">.</span>catch<span className="cf-white">(</span><span className="cf-purple">err</span> => console.log<span className="cf-white">(</span>err<span className="cf-white">));</span>
			</div>
		</div>)).toBe(true);
	});

	it('should be selectable by class "container"', function() {
		expect(shallow(<Home />).is('.container')).toBe(true);
	});
});