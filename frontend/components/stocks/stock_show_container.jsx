import { connect } from 'react-redux';
import StockShowPage from './stock_show';


const mSP = (state) => ({
	currentUser: state.session.currentUser,
	stock: Object.values(state.entities.stocks)
});

const mDP = dispatch => ({
	
});

export default connect(mSP, mDP)(StockShowPage);