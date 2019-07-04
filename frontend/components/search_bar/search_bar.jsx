import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="search-bar">
				<input type="text" placeholder="search ..." />
			</div>
		);
	}
}

export default SearchBar;