import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import StockOrderFormContainer from './stock_order_form_container';
import StockPriceChartContainer from './stock_price_chart_container';
import StockInfoContainer from './stock_info_container';

class StockShowPage extends React.Component {
	constructor(props) {
		super(props);
	}

	

	render() {
		return (
			<div className="stock-show">
				<NavBarContainer />
				<div className="stock-show-main-div">
					<div className="stock-show-left-column">
						<StockPriceChartContainer />
						<StockInfoContainer />
						{/* <News Feed Container /> */}
					</div>
					<div className="stock-show-right-column">
						<StockOrderFormContainer />
					</div>
				</div>
			</div>
	);
	}
};

export default StockShowPage;