import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PortfolioChart from './portfolio_chart';
import NewsFeedContainer from '../stock_show/news_feed_container';
import Watchlist_Portfolio from './watchlist_portfolio';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchHoldings(this.props.currentUser);
		this.props.fetchWatchlist(this.props.currentUser);
	}

	render() {

		return (
			<>
				<div className="navbar">
					<NavBarContainer />
				</div>

				<main className="dashboard">
					<div className="dashboard-left">
						<PortfolioChart holdings={this.props.holdings} />
						<NewsFeedContainer />
					</div>
					<div className="dashboard-right">
						<Watchlist_Portfolio 
							watchlist={this.props.watchlist}
							holdings={this.props.holdings} 
							/>
					</div>
				</main>
			</>
		)
	}
}

export default Dashboard;