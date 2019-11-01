import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleDemoLogin = this.handleDemoLogin.bind(this);
	}

	handleDemoLogin(e) {
		e.preventDefault();
		const user = {
			username: 'Lord Petyr Baelish',
			password: 'ChAoS_iSSa_LaDdEr'
		};
		this.props.login(user);
	}

	render() {
		const displayNav = this.props.currentUserId ? (
			<div className="nav-bar-1">
				<img src={window.images.raven_logo} />
				<SearchBarContainer />
				<span className="nav-bar-right">
					<Link className="nav-demo-link" to="/dashboard">Home</Link>
					<button className="nav-demo-link" onClick={this.props.logout}>Log Out</button>
				</span>
			</div>
		) : (
				<nav className="nav-bar-2">
					<div className="nav-bar-left">
						<img className="raven-logo" src={window.images.raven_logo} />
						<Link className="nav-home-link" to="/">ravenhood</Link>
					</div>
					<div className="nav-bar-right">
						<Link className="nav-link" to="/signup">Sign Up</Link>
						<Link className="nav-link" to="/login">Log In</Link>
						<button className="signup-button" onClick={this.handleDemoLogin}>Demo</button>
					</div>
				</nav>
			);
		return (
			<>
				{displayNav}
			</>
		);
	}
}

export default NavBar;