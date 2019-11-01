import React from 'react';
import { LoadingBar } from '../loading_bar';
import NavBarContainer from '../nav_bar/nav_bar_container';
import StockPriceChart from './stock_price_chart';
import { StockInfo } from './stock_info';
import NewsFeedContainer from './news_feed_container';
import StockOrderFormContainer from './stock_order_form_container';

export default class StockShowPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const userId = (Object.keys(this.props.userId))[0];
		this.props.fetchWatchlist(userId);
		const symbol = this.props.match.params.symbol;
		this.props.fetchStock(symbol);
	}

	render() {
		const currStock = this.props.stock;

		const display = !currStock ? <LoadingBar /> : (
			<>
			<NavBarContainer />
			<div className="stock-show-main-div">
				<div className="stock-show-left-column">
					<StockPriceChart stock={currStock} />
					<StockInfo stock={currStock} />
					<NewsFeedContainer stock={currStock} />
				</div>
				<div className="stock-show-right-column">
					<StockOrderFormContainer stock={currStock}/>
				</div>
			</div>
			</>
		);
		
		return (<div>{display}</div>);
	}
};