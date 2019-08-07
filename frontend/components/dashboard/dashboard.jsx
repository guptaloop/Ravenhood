import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from '../stock_show/news_feed_container';


class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchWatchlist(this.props.currentUser);
	}

	render() {
		return (
			<div className="dashboard">
				<NavBarContainer />

				<div className="dashboard-main">
					<div className="dashboard-left">
						<h1>PORTFOLIO VALUE / STOCK PRICE CHART</h1>
						<NewsFeedContainer />
					</div>
					<div className="dashboard-right">
						<h1>WATCHLIST / PORTFOLIO</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;