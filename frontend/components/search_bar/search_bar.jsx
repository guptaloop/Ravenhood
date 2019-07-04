import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			symbol: ''
		};

	}

	handleInput(type) {
		return (e) => {
			this.setState({ [type]: e.target.value });
		};
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					type="text"
					placeholder="search ..." 
					value={this.state.symbol}
					onChange={this.handleInput('symbol')}
				/>
			</div>
		);
	}
}

export default SearchBar;