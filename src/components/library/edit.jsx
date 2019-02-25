import React from 'react';
import '../../css/library.css';
import { getSong } from '../../js/data.js';

// Return a list of songs that is filter-able
export default function LibraryEdit(props) {
	var song = getSong(props.match.params.id);

	return (
		<div className="container">
			<h1>Edit Song</h1>
			
			<form>
				<p className="form-group">
					<label htmlFor="title">
						Title<span className="req">*</span>
					</label>
					<input type="text" id="title" name="title" defaultValue={song.title} className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="arranger">
						Arranger<span className="req">*</span>
					</label>
					<input type="text" id="arranger" name="arranger" defaultValue={song.arranger} className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="length">
						Length<span className="req">*</span>
					</label>
					<input type="text" id="length" name="length" defaultValue={song.length} className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="audio">
						Audio
					</label>
					<input type="text" id="audio" name="audio" defaultValue={song.audio} className="form-control" />
				</p>

				<p className="form-group">
					<input type="submit" defaultValue="Submit" className="btn btn-primary" />
					<a href="/library" className="btn btn-cancel">Cancel</a>
				</p>
			</form>
		</div>
	);
}