import React from 'react';

const CustomTooltip = ({active, payload, label, coordinate}) => {
	// let price;
	let year;

	if (active && payload && payload[0]) {
		// price = payload[0].value;
		if (label < 0) {
			year = (label * -1).toString() + ' BC';
		} else {
			year = label.toString() + ' AC';
		}
	}

	if (active) {
		return (
			<div>
				{/* code for having the stock price display within this component */}
				{/* <div className="chart-label-div" style={{ top: coordinate.y - 50 }}>
					<span className="chart-label">{`${price}`}</span>
				</div> */}
					
				{/* displays year when hovering over line chart */}
				<div className="chart-year" style={{ left: coordinate.x - 32 }}>
					<span>{`${year}`}</span>
				</div>
			</div>
		);
	}

	return null;
}

export default CustomTooltip;