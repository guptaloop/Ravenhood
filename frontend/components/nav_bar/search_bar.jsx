import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			symbol: ''
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleChange(e) {
		this.setState({
			search: e.target.value,
			results: this.props.searchStocks(e.target.value)
		});
	}

	handleKeyPress(e) {
		if (e.key == 'Enter') {
			this.props.history.push(`/stocks/${this.state.results[0].symbol}`);
		}
	}

	render() {
		return (
			<input
				type="text"
				className="search-bar"
				placeholder="Search"
				value={this.state.search}
				onChange={e => this.handleChange(e)}
				onKeyPress={this.handleKeyPress}
			/>
		)
	}
}

export default SearchBar;