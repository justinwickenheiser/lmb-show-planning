import React from 'react';

export default class ShowEdit extends React.Component {

	constructor(props) {
		super(props);
		this.show = shows[0];
		this.songs = props.songs;
		this.selectedSongs = props.selectedSongs;
	}


	render() {
		var selectedSongKeys = [];
		for (var i = 0; i<this.selectedSongs.length; i++) {
			selectedSongKeys.push(this.selectedSongs[i].songId);
		}
		var songsList = this.songs.map((item, key) => {
			if (selectedSongKeys.includes(item.songId)) {
				return (
					<label key={"song-"+key} htmlFor={"song-"+key}>
						<input type="checkbox" id={"song-"+key} name="form[song]" value={item.songId} defaultChecked="checked" /> {item.title}
					</label>
				)
			} else {
				return (
					<label key={"song-"+key} htmlFor={"song-"+key}>
						<input type="checkbox" id={"song-"+key} name="form[song]" value={item.songId} /> {item.title}
					</label>
				)
			}

		});
		return (
			<div className="container">
				<h1>Edit Show</h1>
				
				<form method="post" action="/shows/post">
					<input type="hidden" id="showId" name="form[showId]" defaultValue={this.show.showId} className="form-control" />

					<p className="form-group">
						<label htmlFor="title">
							Title<span className="req">*</span>
						</label>
						<input type="text" id="title" name="form[title]" defaultValue={this.show.title} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="details">
							Details<span className="req">*</span>
						</label>
						<textarea id="details" name="form[details]" defaultValue={this.show.details} cols="50" rows="5" className="form-control"></textarea>
					</p>

					<p className="form-group">
						<label htmlFor="season">
							Season<span className="req">*</span>
						</label>
						<input type="text" id="season" name="form[season]" defaultValue={this.show.season} className="form-control" placeholder="ex: 2018" />
					</p>

					<p className="form-group">
						<label htmlFor="showNumber">
							Show #<span className="req">*</span>
						</label>
						<input type="text" id="showNumber" name="form[showNumber]" defaultValue={this.show.showNumber} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="date">
							Show Date<span className="req">*</span>
						</label>
						<input type="text" id="date" name="form[date]" defaultValue={this.show.date} className="form-control" placeholder="mm/dd/yyyy" />
					</p>

					<strong>Songs<span className="req">*</span></strong>
					{songsList}

					<p className="form-group">
						<input type="submit" defaultValue="Submit" className="btn btn-primary" />
						<a href="/shows" className="btn btn-cancel">Cancel</a>
					</p>
				</form>
			</div>
		);
	}
}