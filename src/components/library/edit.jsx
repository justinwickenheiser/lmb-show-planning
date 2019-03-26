import React from 'react';
import axios from 'axios';

export default class LibraryEdit extends React.Component {

	constructor(props) {
		super(props);
		this.song_id = props.match.params.id;
		this.loadSongs = this.loadSongs.bind(this);
		this.state = {
			song: {}
		};
	}

	loadSongs() {
		axios.get(`/songs/${this.song_id}.json`)
			.then(res => {
				this.setState({ song: res.data[0] });
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.loadSongs();
	}

	render() {
		return (
			<div className="container">
				<h1>Edit Song</h1>
				
				<form method="post" action="/library/post">
					<input type="hidden" id="songId" name="form[songId]" defaultValue={this.state.song.song_id} className="form-control" />

					<p className="form-group">
						<label htmlFor="title">
							Title<span className="req">*</span>
						</label>
						<input type="text" id="title" name="form[title]" defaultValue={this.state.song.title} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="arranger">
							Arranger<span className="req">*</span>
						</label>
						<input type="text" id="arranger" name="form[arranger]" defaultValue={this.state.song.arranger} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="length">
							Length<span className="req">*</span>
						</label>
						<input type="text" id="length" name="form[length]" defaultValue={this.state.song.song_length} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="audio">
							Audio
						</label>
						<input type="text" id="audio" name="form[audio]" defaultValue={this.state.song.audio} className="form-control" />
					</p>

					<p className="form-group">
						<input type="submit" defaultValue="Submit" className="btn btn-primary" />
						<a href="/library" className="btn btn-cancel">Cancel</a>
					</p>
				</form>
			</div>
		);
	}
}