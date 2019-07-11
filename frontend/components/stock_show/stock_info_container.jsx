import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockInfoSection from './stock_info';
import { fetchStock } from '../../actions/stock_actions';


const mSP = ({ entities }) => ({
	stock: entities.stocks[entities.search],
});

const mDP = dispatch => ({
	fetchStock: symbol => dispatch(fetchStock(symbol))
});

export default withRouter(connect(mSP, mDP)(StockInfoSection));