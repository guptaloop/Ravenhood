import React from 'react';
import { WatchlistChart } from './watchlist_chart';
import { Link } from 'react-router-dom';

const Watchlist = ({ watchlist }) => {
	const displayWatchlist = watchlist.map(item => (
		<Link to={`/stocks/${item.symbol}`} key={item.symbol} >
			<div className="watchlist-item">
				<h4 className="item-text">{item.symbol}</h4>
				<WatchlistChart />
			</div>
		</Link>
	));
	
	return (
		<div className="watchlist">
			<h1 className="watchlist-title">Watchlist</h1>
			<div>{displayWatchlist}</div>
		</div>
	);
};

export default Watchlist;