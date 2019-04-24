import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ShowIndex from '../components/shows/Index';
import Card from '../components/shows/Index';

describe('A ShowIndex component', function() {

	var props = {
		songs: [],
		shows: [],
		selectedSongs: {}
	};

	var cards = props.shows.map((item, key) => 
			<Card show={item} selectedSongs={this.state.selectedSongs[item.show_id]} songs={this.state.songs} key={"show-"+key} />
		);

	const wrapper = shallow(<ShowIndex shows={props.shows} />);


	it('should render without errors', function() {
		expect(wrapper.contains(<div className="container">
			<h1>Shows</h1>
			<p>
				<a href={"/shows/new"} className="btn btn-success">
					New Show
				</a>
			</p>
			<div className="row">
				{cards}
			</div>
		</div>)).toBe(true);
	});

	it('should be selectable by class "container"', function() {
		expect(wrapper.is('.container')).toBe(true);
	});
});