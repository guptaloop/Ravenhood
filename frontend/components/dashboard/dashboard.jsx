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

				<div>
					<h1> DASHBOARD </h1>
				</div>
			</>
		)
	}	
};

export default Dashboard;