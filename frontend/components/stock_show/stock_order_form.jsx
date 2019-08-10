import React from 'react';
import { addToWatchlist, removeFromWatchlist } 
	from '../../actions/stock_actions';

export default class StockOrderForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shares: 0
			// order_type: "buy" or buy: false,
		};
		this.getCost = this.getCost.bind(this);
		this.handleOrder = this.handleOrder.bind(this);
	}

	componentWillMount() {
		const userId = (Object.keys(this.props.userId))[0];
		this.props.fetchHoldings(userId);
	}

	handleInput(type) {
		return(e) => { this.setState({ [type]: parseInt(e.target.value) });	};
	}

	handleOrder(user_id, symbol, shares, price) {
		const ownedStocks = this.props.holdings.map(holding => holding.symbol);
		if (ownedStocks.includes(symbol)) {
			const index = ownedStocks.indexOf(symbol);
			const holding_id = this.props.holdings[index].id;
			this.props.updateHolding(holding_id, user_id, shares);
		} else {
			this.props.buyStock(user_id, symbol, shares, price);
		}
	}

	getCost(mktPrice) { (mktPrice * this.state.shares).toFixed(2); }

	render() {
		let watchlistId;
		const symbol = this.props.stock.symbol;
		const mktPrice = this.props.stock.mktPrice;
		const watchlist = this.props.watchlist;
		const userId = (Object.keys(this.props.userId))[0];
		
		// grabs the unique id to delete a 'stock_watch' from the db
		watchlist.forEach(function(el){
			if (el.symbol === symbol) { watchlistId = el.id; }
		});
		// creates an array of all the symbols on a user's watchlist
		const watchlistSymbols = watchlist.map(obj => obj.symbol);
		// determines which button to display (add or remove from watchlist)
		const watchlistButton = watchlistSymbols.includes(symbol) ? (
			<button 
				className="sidebar-button"
				onClick = {() => this.props.removeFromWatchlist(watchlistId, userId)}
				>Remove from Watchlist
			</button>
		) : (
			<button
				className="sidebar-button"
					onClick={() => this.props.addToWatchlist(userId, symbol)}
				>Add to Watchlist
			</button>
		);
		
		return (
			<div className="order-form-watchlist-button">
				<form className="order-form">
					<div className="heading-div">
						<h2 className="heading-symbol">{symbol}</h2>
						{/* will need an eventHandler on this */}
						<button className="heading-order-type-tog">Buy / Sell</button>
					</div>

					<div className="order-atts-div">
						<div className="row">
							<label className="row-shares">Shares</label>
							<input
								type="text"
								className="shares-input"
								value={this.state.shares}
								onChange={this.handleInput('shares')}/>
						</div>
						<div className="row">
							<label className="row-price">Market Price</label>
							<output className="row-output">{mktPrice}</output>
						</div>
						<div className="price-border"></div>
						<div className="row">
							<label className="row-value">Total Value</label>
							<output className="row-output">{this.getCost(mktPrice)}</output>
						</div>
					</div>
					
					<div className="submit-order-button-div">
						<button className="sidebar-button"
							onClick = {() => this.handleOrder(userId, symbol, this.state.shares, mktPrice)}
							>Submit Order
						</button>
					</div>

					<div className="avail-gold-div">
						{/* need to pull avail gold from users */}
						<h5 className="avail-gold">5000 Gold Available</h5>
					</div>
				</form>
				<div className="watchlist-button-div">{watchlistButton}</div>
			</div>
		);
	}
}