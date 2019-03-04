import React from 'react';
// import '../../css/library.css';

export default function LibraryNew(props) {

	return (
		<div className="container">
			<h1>New Song</h1>
			
			<form>
				<p className="form-group">
					<label htmlFor="title">
						Title<span className="req">*</span>
					</label>
					<input type="text" id="title" name="title" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="arranger">
						Arranger<span className="req">*</span>
					</label>
					<input type="text" id="arranger" name="arranger" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="length">
						Length<span className="req">*</span>
					</label>
					<input type="text" id="length" name="length" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="audio">
						Audio
					</label>
					<input type="text" id="audio" name="audio" className="form-control" />
				</p>

				<p className="form-group">
					<input type="submit" defaultValue="Submit" className="btn btn-primary" />
					<a href="/library" className="btn btn-cancel">Cancel</a>
				</p>
			</form>
		</div>
	);
}