import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ShowIndex from '../components/shows/Index';

describe('A ShowIndex component', function() {

	var props = {
		shows: []
	};

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

	const wrapper = shallow(<ShowIndex shows={props.shows} />);


	it('should render without errors', function() {
		expect(wrapper.contains(<div className="container">
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
		</div>)).toBe(true);
	});

	it('should be selectable by class "container"', function() {
		expect(wrapper.is('.container')).toBe(true);
	});
});