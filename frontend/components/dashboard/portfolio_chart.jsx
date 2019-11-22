import React from 'react';
import CustomTooltip from '../stock_show/custom_tooltip';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { LoadingBar } from '../loading_bar';
import { genValues } from '../../util/custom_utils';
import { sumPortfolioValue } from '../../actions/selectors';

export default class PortfolioChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currPeriod: '', portfolioValue: 0, values: []	};
		this.genChart = this.genChart.bind(this);
	}

	componentDidMount() {
		this.genChart('1Y');
	}

	componentWillUpdate(nextProps) {
		if (this.props.holdings !== nextProps.holdings) {
			this.genChart('1Y', sumPortfolioValue(nextProps.holdings).toFixed(2));
		}
	}

	genChart(period, portVal=0) {
		this.setState({ portfolioValue: portVal });
		this.setState({ currPeriod: period });
		const formattedPeriod = parseInt(period, 10);
		const newValues = genValues([formattedPeriod, portVal]);
		this.setState({ values: newValues });
	}

	render() {
		let values = this.state.values;
		
		const valueChart = values.length === 0 ? <LoadingBar /> : (
			<LineChart width={700} height={300} margin={{ top: 100 }} data={values} >
				<XAxis dataKey="date" hide={true} />
				<YAxis dataKey="price" hide={true} />
				<Tooltip
					wrapperStyle={{ visibility: 'visible' }}
					position={{ x: 0, y: -10 }}
					content={<CustomTooltip 
						basePrice={values[0].price} mktPrice={this.state.portfolioValue}/>}
				/>
				<Line type="monotone" stroke="#21ce99" activeDot={{ r: 6 }}
					dataKey="price" strokeWidth={2} dot={false} />
			</LineChart>
		);

		return (
			<div className="price-chart-div">
				<div>{valueChart}</div>
				<div id="chart-buttons">
					{['1Y', '5Y', '10Y', '25Y', '50Y'].map(period => (
						<button
							key={period}
							className={this.state.currPeriod === period ? 'selected' : ''}
							onClick={() => this.genChart(period, this.state.portfolioValue)}>
							{period}</button>
					))}
				</div>
			</div>
		);
	}
}