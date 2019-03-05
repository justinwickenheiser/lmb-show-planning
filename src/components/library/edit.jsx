import React from 'react';

export default class LibraryEdit extends React.Component {

	constructor(props) {
		super(props);
		this.song = lib[0];
	}

	render() {
		return (
			<div className="container">
				<h1>Edit Song</h1>
				
				<form method="post" action="/library/post">
					<input type="hidden" id="songId" name="form[songId]" defaultValue={this.song.songId} className="form-control" />

					<p className="form-group">
						<label htmlFor="title">
							Title<span className="req">*</span>
						</label>
						<input type="text" id="title" name="form[title]" defaultValue={this.song.title} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="arranger">
							Arranger<span className="req">*</span>
						</label>
						<input type="text" id="arranger" name="form[arranger]" defaultValue={this.song.arranger} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="length">
							Length<span className="req">*</span>
						</label>
						<input type="text" id="length" name="form[length]" defaultValue={this.song.length} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="audio">
							Audio
						</label>
						<input type="text" id="audio" name="form[audio]" defaultValue={this.song.audio} className="form-control" />
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