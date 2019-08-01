import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockPriceChart from './stock_price_chart';
import { fetchPrices } from '../../actions/stock_actions';


const mSP = ({ entities }) => ({
	prices: entities.prices,
});

const mDP = dispatch => ({
	fetchPrices: arr => dispatch(fetchPrices(arr)),
});

export default withRouter(connect(mSP, mDP)(StockPriceChart));