import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
import { fetchAllStocks } from '../../actions/stock_actions';
import { searchStocks } from '../../actions/selectors';

const mSP = state => ({
	stocks: state.entities.stockIndex,
	searchStocks: query => searchStocks(state, query),
});

const mDP = dispatch => ({
	fetchStocks: () => dispatch(fetchAllStocks()),
});

export default withRouter(connect(mSP, mDP)(SearchBar));