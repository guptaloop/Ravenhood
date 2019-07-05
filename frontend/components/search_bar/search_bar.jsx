import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {search: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleChange(e) {
		const search = e.target.value;
		this.setState({ search });
	}

	handleKeyPress(e) {
		if (e.key == 'Enter') {
			// this.props.history.push(`/stocks/${this.state.search}`);
			this.props.history.push(`/stocks/LION`);
		}
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					type="text"
					placeholder="search ..."
					value={this.state.search}
					onChange={e => this.handleChange(e)}
					onKeyPress={this.handleKeyPress} />
			</div>
		);
	}
}

export default SearchBar;