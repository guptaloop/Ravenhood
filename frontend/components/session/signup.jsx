import React from 'react';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(type) {
		return (e) => {
			this.setState({ [type]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.signup(user);
	}

	componentDidMount() {
		this.props.receiveErrors([]);
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li
						className="error-li"
						key={`error-${i}`}>
						<img
							src={window.images.sess_err_logo}
							className="sess-err-logo"
						/> {error}
					</li>
				))}
			</ul>
		);
	}


	render () {
		return (
			<div className="signup">
			
				<div className="signup-left">
					<img className="signup-img" src={window.images.bridge}/>
				</div>

				<div className="signup-right">
				
					<h2 className="welcome-to">Welcome to Ravenhood</h2>
					<br/>
					
					<form>
						
						<label className="input">Username<br/>
							<input
								type="text"
								className="text-box"
								value={this.state.username}
								onChange={this.handleInput('username')}
							/>
						</label>
						<br/>
						<br/>

						<label className="input">Password<br/>
							<input
								type="password"
								className="text-box"
								value={this.state.password}
								onChange={this.handleInput('password')}
							/>
						</label>

						<div className="signup-errors">{this.renderErrors()}</div>
						
						<br/>
						<br/>
						
						<button className="signup-signup-button" onClick={this.handleSubmit}>Sign Up</button>
					
					</form>
				</div>


			</div>
		);
	}
};

export default SignUpForm;