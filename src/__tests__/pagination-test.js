import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Pagination from '../components/Pagination';

describe('A Pagination component', function() {
	var props = {
		page: true,
		recordCount: 10,
		maxRecords: 2,
	};

	var maxPages = Math.ceil(props.recordCount/props.maxRecords);
	var showDots = true;
	var listElements = [];

	for (var i = 1; i <= maxPages; i++) {
		if ( (i >= props.currentPage-props.minPageItems+1 && i <= props.currentPage+props.minPageItems-1 )
			|| i === 1
			|| i === maxPages
		) {
			showDots = true;
			if (props.currentPage === i) {
				listElements.push(
					<li className="active" key={"pagination-key-"+i}>
						<button>{i}</button>					
					</li>
				);
			} else {
				listElements.push(
					<li key={"pagination-key-"+i}>
						<button>{i}</button>					
					</li>
				);
			}
		} else if ( showDots && (i === props.currentPage+2 || i === 2 || i === maxPages-1) ) {
			showDots = false;
			listElements.push(<li className="separator" key={"pagination-key-"+i}>...</li>);
		}
	}

	const wrapper = shallow(<Pagination currentPage={props.page} recordCount={props.recordCount} maxRecords={props.maxRecords} minPageItems={2} />);


	it('should render without errors', function() {
		expect(wrapper.containsAnyMatchingElements(listElements)).toBe(true);
	});

	it('should be selectable by class "pagination-container"', function() {
		expect(wrapper.is('.pagination-container')).toBe(true);
	});
});