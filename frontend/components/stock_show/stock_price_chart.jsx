import React from 'react';
import CustomTooltip from './custom_tooltip';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { LoadingBar } from '../loading_bar';

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
		const priceChart = prices ? (
				<LineChart width={600} height={400} data={prices}>
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Tooltip
						wrapperStyle={{ visibility: 'visible' }}
						position={{ x: 0, y: -84 }} 
						content={<CustomTooltip 
											value={this.props.stock.mktPrice}
										/>} 
					/>
					<Line
						type="monotone"
						activeDot ={{r: 6}}
						dataKey="price"
						stroke="#f45531"
						strokeWidth={2}
						dot={false} />
				</LineChart> ) : <LoadingBar /> ;
		
		return (
			<div className="price-chart-div">
				<header className="price-chart-text">{this.props.stock.name}</header>
				<div>{priceChart}</div>
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