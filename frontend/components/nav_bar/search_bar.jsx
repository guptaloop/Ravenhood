import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			symbol: ''
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
		const symbol = Object.assign({}, this.state);
		this.props.search(symbol);
	}

	render() {
		return (
			<input
				type="text"
				className="search-bar"
				placeholder="Search"
				value={this.state.symbol}
				onChange={this.handleInput('symbol')}
			/>
		)
	}
}

export default Search;