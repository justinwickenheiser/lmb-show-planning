import React from 'react';

export default function Pagination(props) {
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
						<button onClick={(e) => props.onClick(parseInt(e.currentTarget.innerText, 10))}>{i}</button>					
					</li>
				);
			} else {
				listElements.push(
					<li key={"pagination-key-"+i}>
						<button onClick={(e) => props.onClick(parseInt(e.currentTarget.innerText, 10))}>{i}</button>					
					</li>
				);
			}
		} else if ( showDots && (i === props.currentPage+2 || i === 2 || i === maxPages-1) ) {
			showDots = false;
			listElements.push(<li className="separator" key={"pagination-key-"+i}>...</li>);
		}
	}

	return (
		<div className="pagination-container">
			<ul className="pagination">
				{listElements}
			</ul>
		</div>
	);
}