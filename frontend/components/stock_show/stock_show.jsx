import React from 'react';
import { LoadingBar } from '../loading_bar';
import NavBarContainer from '../nav_bar/nav_bar_container';
import StockPriceChartContainer from './stock_price_chart_container';
// import StockInfoContainer from './stock_info_container';
import NewsFeed from './news_feed';
import StockOrderFormContainer from './stock_order_form_container';
import StockInfoSection from './stock_info';

class StockShowPage extends React.Component {
	constructor(props) {
		super(props);
	}

	// auto-invoked after the render (which shows the LOADING element), then will auto-render the component once the fetchStock dispatch completes.
	componentDidMount() {
		const symbol = this.props.match.params.symbol;
		this.props.fetchStock(symbol);
	}

	render() {
		if (!this.props.stock) {
			return (<LoadingBar />)
		}

		return (
			<div className="stock-show">
				<NavBarContainer />
				<div className="stock-show-main-div">
					<div className="stock-show-left-column">
						<StockPriceChartContainer stock={this.props.stock} />
						<StockInfoSection stock={this.props.stock} />
						<NewsFeed />
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