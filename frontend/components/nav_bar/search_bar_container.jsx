import React from 'react';
import { connect } from 'react-redux';
import Search from './search_bar';

const mSP = state => ({
	
});

const mDP = dispatch => ({
	search: symbol => dispatch(search(symbol))
});

export default connect(mSP, mDP)(Search);