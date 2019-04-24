import React from 'react';

// Return a list of songs that is filter-able
export default function Card(props) {

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

	return (
		<div className="col-md-4">
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
		</div>
	);
}