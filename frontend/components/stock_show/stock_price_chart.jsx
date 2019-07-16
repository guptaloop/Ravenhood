import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

class StockPriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			period: 5.0,
			// price: this.props.prices.slice(-1)[0].price,
		}
	}

	componentWillMount() {
		this.props.setPrices(this.state.period);
	}

	render() {
		const priceChart = (
			<div className="price-chart-div">
				<header className="price-chart-text">{this.props.stock.name}</header>
				{/* <h2 className="price-chart-text">{this.props.prices.slice(-1)[0].price}</h2> */}
				<LineChart width={600} height={400} data={this.props.prices}>
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Line type="monotone" dataKey="price" stroke="#f45531" dot={false} />
				</LineChart>
			</div>
		);

		return (priceChart);
	}
}

export default StockPriceChart;