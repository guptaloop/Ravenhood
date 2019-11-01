import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Splash extends React.Component {
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
		return (
			<>
				<NavBarContainer />
				<div className="splash">
					
					<div className="splash-left">
						<h1 className="splash-title">Invest for Power</h1>
						<span className="splash-body">Claim the iron throne by investing in the Realm's most prosperous companies.
					<br />It's as easy as sending a raven.</span>
						{/* <Link className="signup-button" to="/signup">Sign Up</Link> */}
						<button className="signup-button" onClick={this.handleDemoLogin}>Demo</button>
						<div className="spacing-div"></div>
					</div>

					<div className="splash-right">
						<img src={window.images.iron_thronea} className="throne-img" />
					</div>
				</div>
			</>
		)
	}
}

export default Splash;