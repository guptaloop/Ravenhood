import React from 'react';

const CustomTooltip = ({active, payload, label}) => {
	
	if (active) {
		return (
			<div className="chart-label-div">
				{/* below shows the year */}
				<p className="chart-price-label">{`${label}`}</p>
				{/* below grabs the price */}
				<p className="chart-price-value">{`${payload[0].value}`}</p>
			</div>
		);
	}

	return null;
}

export default CustomTooltip;