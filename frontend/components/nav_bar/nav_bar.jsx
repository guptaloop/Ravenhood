import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';

const NavBar = ({ currentUserId, logout }) => {
	
	const display = currentUserId ? (
		// Home is a dead link, will route to dashboard in next MVP
		<nav className="nav-bar-1">
			
			<div className="nav-bar-2">
				<img className="raven-logo" src={window.images.raven_logo} />
				<Search/>

				<div className="nav-bar-right">
					<Link className="nav-demo-link" to="/dashboard">Home</Link>
					<button className="nav-demo-link" onClick={logout}>Log Out</button>
				</div>
			</div>
		
		</nav>

	) : (
		
		<nav className="nav-bar-2">

			<div className="nav-bar-left">
				<img className="raven-logo" src={window.images.raven_logo}/>
				<Link className="nav-home-link" to="/">robynhood</Link>
			</div>
				
			<div className="nav-bar-right">
				<Link className="nav-link" to="/login">Demo</Link>
				<Link className="nav-link" to="/login">Log In</Link>
				<Link className="signup-button" to="/signup">Sign Up</Link>
			</div>

		</nav>
	);

	return (
		<div className="nav-bar-1">
			{display}
		</div>
	);
};

export default NavBar;