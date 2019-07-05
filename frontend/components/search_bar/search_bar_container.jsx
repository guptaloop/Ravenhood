import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mSP = state => ({
	stocks: state.entities.stocks,
});

export default withRouter(connect(mSP, null)(SearchBar));