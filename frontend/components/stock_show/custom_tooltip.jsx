import React from 'react';

const CustomTooltip = (
	{ active, payload, label, coordinate, basePrice, mktPrice=1000 }) => {
	
	let priceDiff, pctDiff, year;

	if (active && payload && payload[0]) {
		// this code runs when user hovers over the chart
		priceDiff = (payload[0].value - basePrice).toFixed(2);	
		pctDiff = ((priceDiff / basePrice) * 100).toFixed(2);
		priceDiff = priceDiff > 0 ? '+$' + priceDiff.toString() : 
			'-$' + Math.abs(priceDiff).toString();
		year = label < 0 ? (label*-1).toString() + ' BC' : label.toString() + ' AC';
	} else {
		// this code runs when the chart is not hovered on
		priceDiff = (mktPrice - basePrice).toFixed(2);
		pctDiff = ((priceDiff / basePrice) * 100).toFixed(2);
		// if (priceDiff > 0) { priceDiff = '+$' + priceDiff.toString(); }
		priceDiff = priceDiff > 0 ? '+$' + priceDiff.toString() :
			'-$' + Math.abs(priceDiff).toString();
	}

	return (
		<div>
			<div className="chart-numbers">
				<span className="chart-price">
					{active ? '$' + payload[0].value : '$' + mktPrice}
				</span>
				<span className="chart-price-changes">
					{`${priceDiff} (${pctDiff}%)`}
				</span>
			</div>
			
			<div className="chart-year" style={{ left: coordinate.x - 32 }}>
				<span className="chart-year-year">{`${year ? year : ''}`}</span>
			</div>
			
		</div>
	);
}

export default CustomTooltip;