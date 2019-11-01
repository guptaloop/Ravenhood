import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container';


// functional component -- do I need state or lifecycle methods?
const NavBar = ({ currentUserId, logout }) => {
	
	const display = currentUserId ? (
		<div className="nav-bar-1">			
			<img className="raven-logo" src={window.images.raven_logo} />
			<SearchBarContainer />
			<div className="nav-bar-right">
				<Link className="nav-demo-link" to="/dashboard">Home</Link>
				<button className="nav-demo-link" onClick={logout}>Log Out</button>
			</div>
		</div>
	) : (
		<nav className="nav-bar-2">
			<div className="nav-bar-left">
				<img className="raven-logo" src={window.images.raven_logo}/>
				<Link className="nav-home-link" to="/">ravenhood</Link>
			</div>
			<div className="nav-bar-right">
				<Link className="nav-link" to="/login">Demo</Link>
				<Link className="nav-link" to="/login">Log In</Link>
				<Link className="signup-button" to="/signup">Sign Up</Link>
			</div>
		</nav>
	);

	return (
		<>
			{display}
		</>
	);
};

export default NavBar;