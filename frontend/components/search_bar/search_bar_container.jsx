import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchAllStocks } from '../../actions/stock_actions';

const mSP = state => ({
	stocks: state.entities.stocks,
});

const mDP = dispatch => ({
	searchStocks: () => dispatch(fetchAllStocks()),
});

export default withRouter(connect(mSP, mDP)(SearchBar));