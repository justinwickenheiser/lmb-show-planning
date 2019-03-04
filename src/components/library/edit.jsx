import React from 'react';
// import '../../css/library.css';
import { getSong } from '../../js/data.js';

export default class LibraryEdit extends React.Component {

	constructor(props) {
		super(props);
		this.song = getSong(props.match.params.id);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);

		fetch('/library/post', {
			method: 'POST',
			body: data,
		});
	}
	
	render() {
		return (
			<div className="container">
				<h1>Edit Song</h1>
				
				<form onSubmit={this.handleSubmit}>

					<p className="form-group">
						<label htmlFor="title">
							Title<span className="req">*</span>
						</label>
						<input type="text" id="title" name="title" defaultValue={this.song.title} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="arranger">
							Arranger<span className="req">*</span>
						</label>
						<input type="text" id="arranger" name="arranger" defaultValue={this.song.arranger} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="length">
							Length<span className="req">*</span>
						</label>
						<input type="text" id="length" name="length" defaultValue={this.song.length} className="form-control" />
					</p>

					<p className="form-group">
						<label htmlFor="audio">
							Audio
						</label>
						<input type="text" id="audio" name="audio" defaultValue={this.song.audio} className="form-control" />
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