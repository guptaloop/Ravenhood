import React from 'react';
import { Link } from 'react-router-dom';

export default ({ stocks }) => {
	console.log(stocks);
	return (
		<div>
			{stocks.map(stock => 
				<Link key={stock} className="search-item" to={`/stocks/${stock.symbol}`}>
					<div>{stock.symbol}</div><div>{stock.name}</div>
				</Link>)}
		</div>
	)
}