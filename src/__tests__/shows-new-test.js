import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ShowNew from '../components/shows/New';

describe('A ShowNew component', function() {

	var props = {
		allSongs:[],
		songs: []
	};

	var songs = props.songs.map((item, key) => 
		<label key={"song-"+key} htmlFor={"song-"+key}>
			<input type="checkbox" id={"song-"+key} name="form[song]" value={item.song_id} /> {item.title}
		</label>
	);

	const wrapper = shallow(<ShowNew songs={props.allSongs} />);


	it('should render without errors', function() {
		expect(wrapper.contains(<div className="container">
			<h1>New Show</h1>
			
			<form method="post" action="/shows/post">
				<input type="hidden" id="showId" name="form[showId]" defaultValue="" className="form-control" />
				
				<p className="form-group">
					<label htmlFor="title">
						Title<span className="req">*</span>
					</label>
					<input type="text" id="title" name="form[title]" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="details">
						Details<span className="req">*</span>
					</label>
					<input type="text" id="details" name="form[details]" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="season">
						Season<span className="req">*</span>
					</label>
					<input type="text" id="season" name="form[season]" className="form-control" placeholder="ex: 2018" />
				</p>

				<p className="form-group">
					<label htmlFor="showNumber">
						Show #<span className="req">*</span>
					</label>
					<input type="text" id="showNumber" name="form[showNumber]" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="date">
						Show Date<span className="req">*</span>
					</label>
					<input type="text" id="date" name="form[date]" className="form-control" placeholder="mm/dd/yyyy" />
				</p>

				<strong>Songs<span className="req">*</span></strong>
				{songs}

				<p className="form-group">
					<input type="submit" defaultValue="Submit" className="btn btn-primary" />
					<a href="/shows" className="btn btn-cancel">Cancel</a>
				</p>
			</form>
		</div>)).toBe(true);
	});

	it('should be selectable by class "container"', function() {
		expect(wrapper.is('.container')).toBe(true);
	});
});