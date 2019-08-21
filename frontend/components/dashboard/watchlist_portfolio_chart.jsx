import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { genPrices } from '../../util/custom_utils';


export const Watchlist_PortfolioChart = () => {
	const prices = genPrices([20, (Math.random()*1000).toFixed(2)]);
	const curPrice = prices.slice(-1)[0].price;
	const basePrice = prices[0].price;
	const pctChange = (((curPrice - basePrice) / basePrice) * 100).toFixed(2);

	// displays either green or red chart / numbers
	const display = pctChange > 0 ? (
		<div className="watchlist-chart">
			<div>
				<LineChart width={80} height={30} data={prices} >
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Line type="monotone" stroke="#21CE99" dataKey="price" strokeWidth={1} dot={false} />
				</LineChart>
			</div>
			<div className="item-numbers">
				<h4 className="item-text">${curPrice}</h4>
				<h4 className="pct-change-pos">{pctChange}%</h4>
			</div>
		</div>
	) : (
		<div className="watchlist-chart">
			<div>
				<LineChart width={80} height={30} data={prices} >
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Line type="monotone" stroke="#F44531" dataKey="price" strokeWidth={1} dot={false} />
				</LineChart>
			</div>
			<div className="item-numbers">
				<h4 className="item-text">${curPrice}</h4>
				<h4 className="pct-change-neg">{pctChange}%</h4>
			</div>
		</div>
	);

	return (<div>{display}</div>);
};