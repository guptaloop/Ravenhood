import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from '../stock_show/news_feed_container';
import Watchlist from './watchlist';


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
						<div>PORTFOLIO VALUE CHART</div>
						<NewsFeedContainer />
					</div>
					<div className="dashboard-right">
						<Watchlist watchlist={this.props.watchlist}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;