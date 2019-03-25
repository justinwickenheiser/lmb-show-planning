import React from 'react';

// Return a list of songs that is filter-able
export default function ShowIndex(props) {
	var tableRows = props.shows.map((item, key) => 
		<tr key={"show-"+key}>
			<td>{item.title}</td>
			<td>{item.details}</td>
			<td>{item.season}</td>
			<td>{item.show_number}</td>
			<td>{item.date}</td>
			<td className="nowrap">
				<a href={"/shows/edit/"+item.show_id} className="btn btn-info" aria-label={"Edit " + item.title}>
					Edit
				</a>
				<a href={"/shows/delete/"+item.show_id} className="btn btn-danger" aria-label={"Delete " + item.title}>
					Delete
				</a>
			</td>
		</tr>
	);


	
	return (
		<div className="container">
			<h1>Shows</h1>
			<p>
				<a href={"/shows/new"} className="btn btn-success">
					New Show
				</a>
			</p>
			<table id="showTable" className="table table-striped table-mobile">
				<thead>
					<tr>
						<th>Title</th>
						<th>Details</th>
						<th>Season</th>
						<th>Show #</th>
						<th>Show Date</th>
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