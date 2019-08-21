import React from 'react';
import { Watchlist_PortfolioChart } from './watchlist_portfolio_chart';
import { Link } from 'react-router-dom';

const Watchlist_Portfolio = ({ watchlist, holdings }) => {
	const displayWatchlist = watchlist.map(item => (
		<Link to={`/stocks/${item.symbol}`} key={item.symbol} >
			<div className="watchlist-item">
				<h4 className="item-text">{item.symbol}</h4>
				<Watchlist_PortfolioChart />
			</div>
		</Link>
	));

	const displayPortfolio = holdings.map(item => (
		<Link to={`/stocks/${item.symbol}`} key={item.symbol} >
			<div className="watchlist-item">
				<h4 className="item-text">{item.symbol}</h4>
				<Watchlist_PortfolioChart />
			</div>
		</Link>
	));
	
	return (
		<div className="watchlist">
			<h1 className="watchlist-title">Watchlist</h1>
			<div>{displayWatchlist}</div>
			<h1 className="watchlist-title">Portfolio</h1>
			<div>{displayPortfolio}</div>
		</div>
	);
};

export default Watchlist_Portfolio;