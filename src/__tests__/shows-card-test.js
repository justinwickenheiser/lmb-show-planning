import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Card from '../components/shows/Card';

describe('A Card component', function() {

	var props = {
		show:{
			title: 'Abc',
			season: '2019',
			show_number: '3',
			details: 'Family Day',
			date: '9/17/2019',
			show_id: '7'
		},
		songs: [],
		selectedSongs: []
	};

	var songTitles = {};

	for (var i = 0; i < props.songs.length; i++) {
		songTitles[props.songs[i].song_id] = props.songs[i].title;
	}

	if (typeof props.selectedSongs !== 'undefined') {
		var selectedSongsList = props.selectedSongs.map((item,key) =>
			<li key={"song-"+key}>
				{songTitles[item.song_id]}
			</li>
		);
	} else {
		var selectedSongsList;
	}


	const wrapper = shallow(<Card show={props.show} selectedSongs={props.selectedSongs[props.show.show_id]} songs={props.songs} />);


	it('should render without errors', function() {
		expect(wrapper.contains(<div className="col-md-4">
			<div className="card">
				<div className="card-season">
					{props.show.season} - Show {props.show.show_number}
				</div>
				<div className="card-details">
					{props.show.details} ({props.show.date})
				</div>
				<div className="card-header">
					<h2>{props.show.title}</h2>
				</div>
				<div className="card-body">
					<ul>
						{selectedSongsList}
					</ul>
				</div>
				<div className="card-footer row">
					<div className="col-lg-6">
						<a href={"/shows/edit/"+props.show.show_id} className="btn btn-info" aria-label={"Edit " + props.show.title}>
							Edit
						</a>
					</div>
					<div className="col-lg-6">
						<a href={"/shows/delete/"+props.show.show_id} className="btn btn-danger" aria-label={"Delete " + props.show.title}>
							Delete
						</a>
					</div>
				</div>
			</div>
		</div>)).toBe(true);
	});

	it('should be selectable by class "col-md-4"', function() {
		expect(wrapper.is('.col-md-4')).toBe(true);
	});
});