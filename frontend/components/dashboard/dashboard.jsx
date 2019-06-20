import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<>
				<NavBarContainer />

				<div className="dashboard">
					<div className="dashboard-left">
						<h1> PORTFOLIO VALUE CHART </h1>
						<h1> NEWS FEED </h1>
					</div>
					<div className="dashboard-right">
						<h1> WATCH LIST </h1> 
					</div>
				</div>
			</>
		)
	}	
};

export default Dashboard;