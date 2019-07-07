import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchStock, setStockId } from '../../actions/stock_actions';

const mSP = state => ({
	// stocks: state.entities.stocks,
});

const mDP = dispatch => ({
	fetchStock: symbol => dispatch(fetchStock(symbol)),
});

export default withRouter(connect(mSP, mDP)(SearchBar));