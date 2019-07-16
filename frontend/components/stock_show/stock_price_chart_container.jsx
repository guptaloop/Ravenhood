import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockPriceChart from './stock_price_chart';


const mSP = ({ entities }) => ({
	stock: entities.stocks[entities.search],
});

const mDP = dispatch => ({

});

export default withRouter(connect(mSP, mDP)(StockPriceChart));