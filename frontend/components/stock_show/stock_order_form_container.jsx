import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockOrderForm from './stock_order_form';


const mSP = ({ entities }) => ({
	// stock: entities.stock[entities.search]
});

const mDP = dispatch => ({
	// will need to dispatch buy and sell transactions
});

export default withRouter(connect(null, null)(StockOrderForm));