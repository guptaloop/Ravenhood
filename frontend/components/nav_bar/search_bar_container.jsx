import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';

const mSP = state => ({
	stocks: state.entities.search
});

export default withRouter(connect(mSP, null)(SearchBar));