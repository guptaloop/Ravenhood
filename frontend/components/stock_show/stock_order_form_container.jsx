import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockOrderForm from './stock_order_form';


const mSP = ({ entities }) => ({

});

const mDP = dispatch => ({

});

export default withRouter(connect(mSP, mDP)(StockOrderForm));