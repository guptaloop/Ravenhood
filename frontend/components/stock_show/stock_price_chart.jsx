import React from 'react';
import CustomTooltip from './custom_tooltip';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { LoadingBar } from '../loading_bar';
import { genPrices } from '../../util/custom_utils';

export default class StockPriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			currPeriod: '', 
			prices: [],
		};
		this.genChart = this.genChart.bind(this);
	}

	componentWillMount() {
		this.genChart('10Y');
	}
	
	componentWillUpdate(nextProps) {
		if (nextProps.stock.id !== this.props.stock.id) { this.genChart('10Y'); }
	}

	genChart(period) {
		this.setState({ currPeriod: period });
		const formattedPeriod = parseInt(period, 10);
		const newPrices = genPrices([formattedPeriod, this.props.stock.mktPrice]);
		this.setState({	prices: newPrices });
	}

	render() {	
		let stock = this.props.stock;
		let prices = this.state.prices;

		const priceChart = prices ? (
			<LineChart width={700} height={200} margin={{top: 100}} data={prices} >
				<XAxis dataKey="date" hide={true} />
				<YAxis dataKey="price" hide={true} />
				<Tooltip
					wrapperStyle={{ visibility: 'visible' }}
					position={{ x: 0, y: -10 }} 
					content={<CustomTooltip basePrice={prices[0].price} mktPrice={stock.mktPrice} />}
				/>
				<Line type="monotone" stroke="#21ce99" activeDot ={{r: 6}}
							dataKey="price"	strokeWidth={2}  dot={false} />
			</LineChart> ) : <LoadingBar />
		
		return (
			<div className="price-chart-div">
				<header className="chart-company">{stock.name}</header>
				<div>{priceChart}</div>
				<div id="chart-buttons">
					{['10Y', '50Y', '250Y', '1000Y', '10000Y'].map(period => (
						<button 
							key = {period} 
							className = {this.state.currPeriod === period ? 'selected' : ''}
							onClick = {() => this.genChart(period)}>
						{period}</button>
					))}
				</div>
			</div>
		);
	}
}