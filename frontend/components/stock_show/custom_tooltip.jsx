import React from 'react';

const CustomTooltip = (
	{active, payload, label, coordinate, prices, mktPrice}) => {
	let priceDiff, pctDiff, year, base;
	
	if (active && payload && payload[0]) {
		const basePrice = prices[0].price;
		// probably need to stringify and append the '+'
		priceDiff = (payload[0].value - basePrice).toFixed(2);	
		pctDiff = ((priceDiff / basePrice) * 100).toFixed(2);
		
		if (label < 0) {
			year = (label * -1).toString() + ' BC';
		} else {
			year = label.toString() + ' AC';
		}
	} else {
		// how can I get the basePrice here?
		priceDiff = (mktPrice - 5).toFixed(2);
	}


	return (
		<div>	

			<span className="chart-price-changes"/>
				{`${priceDiff ? priceDiff : mktPrice} (${pctDiff ? pctDiff : 0}%)`}
			<span/>
			
			<div className="chart-year" style={{ left: coordinate.x - 32 }}>
				<span>{`${year ? year : ''}`}</span>
			</div>
			
		</div>
	);
}

export default CustomTooltip;