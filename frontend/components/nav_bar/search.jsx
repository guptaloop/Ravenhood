import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<input type="text" className="search-bar"	placeholder="Search"/>
		)
	}
}

export default Search;