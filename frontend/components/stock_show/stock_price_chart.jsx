import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockPriceChart from './stock_price_chart_container';


const mSP = ({ entities }) => ({

});

const mDP = dispatch => ({
	
});

export default withRouter(connect(mSP, mDP)(StockPriceChart));