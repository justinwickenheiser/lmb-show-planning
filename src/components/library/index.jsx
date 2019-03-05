import React from 'react';

// Return a list of songs that is filter-able
export default function LibraryIndex(props) {
	var tableRows = props.songs.map((item, key) => 
		<tr key={"song-"+key}>
			<td>{item.title}</td>
			<td>{item.arranger}</td>
			<td>{item.length}</td>
			<td>
				<a href={item.audio} aria-label={"Recording of " + item.title} target="_blank">Recording</a>
			</td>
			<td className="nowrap">
				<a href={"/library/edit/"+item.songId} className="btn btn-info" aria-label={"Edit " + item.title}>
					Edit
				</a>
				<a href={"/library/delete/"+item.songId} className="btn btn-danger" aria-label={"Delete " + item.title}>
					Delete
				</a>
			</td>
		</tr>
	);
	return (
		<div className="container">
			<h1>Music Library</h1>
			<p>
				<a href={"/library/new"} className="btn btn-success">
					New Song
				</a>
			</p>
			<table id="songTable" className="table table-striped table-mobile">
				<thead>
					<tr>
						<th>Title</th>
						<th>Arranger</th>
						<th>Length</th>
						<th>Audio</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{tableRows}
				</tbody>
			</table>
		</div>
	);
}