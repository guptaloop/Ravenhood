import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';


export const WatchlistChart = ({ prices }) => {
	// const curPrice = prices[10].price;
	const curPrice = 55;
	// const basePrice = prices[0].price;
	const basePrice = 400;
	const pctChange = (((curPrice - basePrice) / basePrice) * 100).toFixed(2);

	return (
		<div className="watchlist-chart">
			<div>
				<LineChart width={80} height={30} data={prices} >
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Line type="monotone" stroke="#21ce99" dataKey="price" strokeWidth={1} 				dot={false}/>
				</LineChart>
			</div>
			<div className="item-numbers">
				<h4 className="item-text">{curPrice}</h4>
				<h4 className="item-text">{pctChange}%</h4>
			</div>
		</div>
	);
};