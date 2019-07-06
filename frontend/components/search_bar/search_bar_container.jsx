import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchStock } from '../../actions/stock_actions';

const mSP = state => ({
	// stocks: state.entities.stocks,
	currentStockId: state.session.currentStockId
});

const mDP = dispatch => ({
	// need to dispatch the 'search' as the symbol .. 
	fetchStock: symbol => dispatch(fetchStock(symbol))
});

export default withRouter(connect(mSP, mDP)(SearchBar));