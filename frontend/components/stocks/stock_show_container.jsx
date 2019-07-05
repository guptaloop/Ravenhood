import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockShowPage from './stock_show';


const mSP = (state) => ({
	currentUser: state.session.id,
	stock: Object.values(state.entities.stocks)
});

const mDP = dispatch => ({
	
});

export default withRouter(connect(mSP, mDP)(StockShowPage));