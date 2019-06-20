import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<input
				type="text"
				className="search-bar"
				placeholder="search [coming soon]"
			/>
		)
	}
	
}

export default Search;