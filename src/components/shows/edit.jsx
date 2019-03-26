import React from 'react';
import axios from 'axios';

export default class ShowEdit extends React.Component {

	constructor(props) {
		super(props);
		this.show_id = props.match.params.id;
		this.loadShow = this.loadShow.bind(this);
		this.loadSongs = this.loadSongs.bind(this);
		this.loadSelectedSongs = this.loadSelectedSongs.bind(this);
		this.state = {
			show: {},
			songs: [],
			selectedSongs: []
		};
	}
	loadShow() {
		axios.get(`/shows/${this.show_id}.json`)
			.then(res => {
				this.setState({ show: res.data[0] });
			})
			.catch(err => console.log(err));
	}
	loadSongs() {
		axios.get('/songs.json')
			.then(res => {
				this.setState({ songs: res.data });
			})
			.catch(err => console.log(err));
	}
	loadSelectedSongs() {
		axios.get(`/shows/${this.show_id}/selected_songs.json`)
			.then(res => {
				this.setState({ selectedSongs: res.data });
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.loadShow();
		this.loadSongs();
		this.loadSelectedSongs();
	}


	render() {
		var selectedSongKeys = [];
		for (var i = 0; i<this.state.selectedSongs.length; i++) {
			selectedSongKeys.push(parseInt(this.state.selectedSongs[i].song_id));
		}
		
		var songsList = this.state.songs.map((item, key) => {
			if (selectedSongKeys.includes(item.song_id)) {
				return (
					<label key={"song-"+key} htmlFor={"song-"+key}>
						<input type="checkbox" id={"song-"+key} name="form[song]" value={item.song_id} defaultChecked="checked" /> {item.title}
					</label>
				)
			} else {
				return (
					<label key={"song-"+key} htmlFor={"song-"+key}>
						<input type="checkbox" id={"song-"+key} name="form[song]" value={item.song_id} /> {item.title}
					</label>
				)
			}

		});
		return (
			<div className="container">
				<h1>Edit Show</h1>
				
				<form method="post" action="/shows/post">
					<input type="hidden" id="showId" name="form[showId]" defaultValue={this.state.show.show_id} className="form-control" />

					<p className="form-group">
						<label htmlFor="title">
							Title<span className="req">*</span>
						</label>
						<input type="text" id="title" name="form[title]" defaultValue={this.state.show.title} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="details">
							Details<span className="req">*</span>
						</label>
						<input type="text" id="details" name="form[details]" defaultValue={this.state.show.details} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="season">
							Season<span className="req">*</span>
						</label>
						<input type="text" id="season" name="form[season]" defaultValue={this.state.show.season} className="form-control" placeholder="ex: 2018" />
					</p>

					<p className="form-group">
						<label htmlFor="showNumber">
							Show #<span className="req">*</span>
						</label>
						<input type="text" id="showNumber" name="form[showNumber]" defaultValue={this.state.show.show_number} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="date">
							Show Date<span className="req">*</span>
						</label>
						<input type="text" id="date" name="form[date]" defaultValue={this.state.show.date} className="form-control" placeholder="mm/dd/yyyy" />
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