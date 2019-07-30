import React from 'react';
import CustomTooltip from './custom_tooltip';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { LoadingBar } from '../loading_bar';

class StockPriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currPeriod: '10Y' };
		this.handleClick = this.handleClick.bind(this);
		this.genChart = this.genChart.bind(this);
	}

	genChart(period) {
		let formattedPeriod = parseInt(period, 10);
		this.props.setPrices([formattedPeriod, this.props.stock.mktPrice]);
	}

	handleClick(period) {
		this.setState({ currPeriod: period });
		this.genChart(period);
	}

	componentWillMount() {
		this.genChart('10Y');
	}

	render() {	
		let stock = this.props.stock;
		let prices = this.props.prices;

		const priceChart = prices ? (
				<LineChart width={700} height={200} margin={{top: 100}} data={prices}>
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Tooltip
						wrapperStyle={{ visibility: 'visible' }}
						position={{ x: 0, y: 0 }} 
						content={<CustomTooltip 
											prices={prices} 
											mktPrice={stock.mktPrice}
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
				<header className="chart-company">{stock.name}</header>
				<div>{priceChart}</div>
				<div id="chart-buttons">
					{['10Y', '50Y', '250Y', '1000Y', '10000Y'].map(period => {
						return (
						<button 
							key={period} 
							className={this.state.currPeriod === period ? 'selected' : '' }
							onClick={() => this.handleClick(period)}
						>{period}</button>
					)})}
				</div>
			</div>
		);
	}
}

export default StockPriceChart;