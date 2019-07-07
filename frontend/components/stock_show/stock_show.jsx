import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import StockOrderFormContainer from './stock_order_form_container';
import StockPriceChartContainer from './stock_price_chart_container';
import StockInfoContainer from './stock_info_container';

class StockShowPage extends React.Component {
	constructor(props) {
		super(props);
	}

	// auto-invoked after the render (which shows the LOADING element), then will auto-render the component once the fetchStock dispatch completes.
	// componentDidMount() {
	// 	const symbol = this.props.match.params.symbol;
	// 	this.props.fetchStock(symbol);
	// }

	render() {
		// if (!this.props.stock) {
		// 	return (<h3 className="about-header">LOADING</h3>)
		// };

		return (
			<div className="stock-show">
				<NavBarContainer />
				<StockPriceChartContainer />
				<StockOrderFormContainer />
				<StockInfoContainer />
			</div>
	);
	}
};

export default StockShowPage;