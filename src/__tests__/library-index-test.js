import React from 'react';
import { shallow, mount, render } from 'enzyme';

import LibraryIndex from '../components/library/Index';

describe('A LibraryIndex component', function() {

	var updatePage = (pg) => {}

	var props = {
		limitedSongs: [],
		currentPage: 1,
		maxRecords: 2,
		allSongs: [],
		songs: []
	};

	const wrapper = shallow(<LibraryIndex songs={props.limitedSongs} page={props.currentPage} maxRecords={props.maxRecords} recordCount={props.allSongs.length} updatePagination={updatePage} />);


	it('should render a table without errors', function() {
		expect(wrapper.exists('#songTable')).toBe(true);
	});

	it('should be selectable by class "container"', function() {
		expect(wrapper.is('.container')).toBe(true);
	});
});