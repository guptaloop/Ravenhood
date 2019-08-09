import React from 'react';
import { WatchlistChart } from './watchlist_chart';
import { genPrices } from '../../util/custom_utils';

const Watchlist = ({ watchlist }) => {
	const displayWatchlist = watchlist.map(item => (
		<div className="watchlist-item" key={item.symbol}>
			<h4 className="item-text">{item.symbol}</h4>
			<WatchlistChart />
		</div>
	));
	
	return (
		<div className="watchlist">
			<h1 className="watchlist-title">Watchlist</h1>
			<div>{displayWatchlist}</div>
		</div>
	);
};

export default Watchlist;