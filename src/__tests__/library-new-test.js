import React from 'react';
import { shallow, mount, render } from 'enzyme';

import LibraryNew from '../components/library/New';

describe('A LibraryNew component', function() {

	const wrapper = shallow(<LibraryNew />);


	it('should render without errors', function() {
		expect(wrapper.contains(<div className="container">
			<h1>New Song</h1>
			
			<form method="post" action="/library/post">
				<input type="hidden" id="songId" name="form[songId]" defaultValue="" className="form-control" />
				
				<p className="form-group">
					<label htmlFor="title">
						Title<span className="req">*</span>
					</label>
					<input type="text" id="title" name="form[title]" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="arranger">
						Arranger<span className="req">*</span>
					</label>
					<input type="text" id="arranger" name="form[arranger]" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="length">
						Length<span className="req">*</span>
					</label>
					<input type="text" id="length" name="form[length]" className="form-control" />
				</p>

				<p className="form-group">
					<label htmlFor="audio">
						Audio
					</label>
					<input type="text" id="audio" name="form[audio]" className="form-control" />
				</p>

				<p className="form-group">
					<input type="submit" defaultValue="Submit" className="btn btn-primary" />
					<a href="/library" className="btn btn-cancel">Cancel</a>
				</p>
			</form>
		</div>)).toBe(true);
	});

	it('should be selectable by class "container"', function() {
		expect(wrapper.is('.container')).toBe(true);
	});
});