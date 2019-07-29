import React from 'react';

const CustomTooltip = ({active, payload, label, coordinate, value}) => {
	let priceDiff;
	let pctDiff;
	let year;
	const prices = value;
	
	if (active && payload && payload[0]) {
		const basePrice = prices[0].price;
		priceDiff = (payload[0].value - basePrice).toFixed(2);
		pctDiff = ((priceDiff / basePrice) * 100).toFixed(2);
		
		if (label < 0) {
			year = (label * -1).toString() + ' BC';
		} else {
			year = label.toString() + ' AC';
		}
	}

	if (active) {
		return (
			<div>	
				<span className="chart-price-change"/>
					{`${priceDiff} (${pctDiff}%)`}
				<span/>
					
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