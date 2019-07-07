import React from 'react';

class StockPriceChart extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="chart-order-about-div">

				<div className="chart-order-div">
					<div className="price-chart">
						<input
							type="text"
							className="price-chart-box"
							placeholder="Price Chart [coming soon]"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default StockPriceChart;