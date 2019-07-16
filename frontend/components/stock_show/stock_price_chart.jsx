import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

class StockPriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() { this.props.setPrices(10); }

	handleClick(e) {
		e.preventDefault();
		const period = parseInt(e.target.textContent, 10);
		this.props.setPrices(period);
	}

	render() {
		let prices = this.props.prices;
		const priceChart = (
				<LineChart width={600} height={400} data={prices}>
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Line type="monotone" dataKey="price" stroke="#f45531" dot={false} />
				</LineChart>
		);
		
		return (
			<div className="price-chart-div">
				<header className="price-chart-text">{this.props.stock.name}</header>
				{/* <h2 className="price-chart-text">{prices.slice(-1)[0].price}</h2> */}
				{priceChart}
				<div className="chart-buttons-row">
					{['10Y', '50Y', '250Y', '1000Y', '10000Y'].map(period => {
						return (<button 
							key = {period}
							className="chart-button"
							onClick={(e) => this.handleClick(e)}
						>{period}</button>)
					})}
				</div>
			</div>
		);
	}
}

export default StockPriceChart;