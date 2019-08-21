import React from 'react';

export default class StockOrderForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { shares: "0",	orderType: "Buy" };
		this.getValue = this.getValue.bind(this);
		this.handleOrder = this.handleOrder.bind(this);
		this.sharesAvailable = this.sharesAvailable.bind(this);
	}

	componentWillMount() {
		const userId = this.props.userId;
		this.props.fetchHoldings(userId);
	}

	handleInput(type) {
		return(e) => { this.setState({ [type]: parseInt(e.target.value) });	};
	}

	getValue(mktPrice) { return (mktPrice * this.state.shares).toFixed(2); }

	sharesAvailable(holdings) {
		const ownedStocks = holdings.map(holding => holding.symbol);
		if (!ownedStocks.includes(this.props.stock.symbol)) {
			return 0;
		} else {
			const index = ownedStocks.indexOf(this.props.stock.symbol);
			return holdings[index].shares;
		}
	}

	handleOrder(user_id, symbol, shares, price) {
		let index, holding_id;
		const ownedStocks = this.props.holdings.map(holding => holding.symbol);
		const type = this.state.orderType;
		const userOwnsStock = ownedStocks.includes(symbol);
	
		if (userOwnsStock) {
			index = ownedStocks.indexOf(symbol);
			holding_id = this.props.holdings[index].id;
		}

		if (type === 'Sell') {
			const sellShares = (shares * -1);
			shares === this.props.holdings[index].shares ?
				this.props.destroyHolding(holding_id, user_id)
				:	this.props.updateHolding(holding_id, user_id, sellShares);
			this.setState({ shares: "0" });
		}

		if (type === 'Buy') {
			userOwnsStock ?	
				this.props.updateHolding(holding_id, user_id, shares)
				:	this.props.buyStock(user_id, symbol, shares, price);
			this.setState({ shares: "0" });
		}
	}

	// renderErrors() {
	// 	return (
	// 		<ul>
	// 			{this.props.errors.map((error, i) => (
	// 				<li className="error-li" key={`error-${i}`}>
	// 					<img src={window.images.sess_err_icon} className="sess-err-logo" /> {error}
	// 				</li>))}
	// 		</ul>
	// 	);
	// }

	render() {
		let watchlistId;
		const orderType = this.state.orderType;
		const userId = this.props.userId;
		const user = this.props.currentUser[userId];
		const gold = user ? user.gold : "Log in to see";
		const symbol = this.props.stock.symbol;
		const mktPrice = this.props.stock.mktPrice;
		const watchlist = this.props.watchlist;

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

		const buyOrSell = ['Buy', 'Sell'].map(type => (
			<button
				key = {type}
				className = {orderType === type ? 'selected' : '' }
				onClick={() => this.setState({ orderType: type })}>
			{type}</button>
		));

		const displayForm = (
			<div>
				<div className="order-atts-div">
					<div className="row">
						<label className="row-shares">Shares</label>
						<input
							type="text"
							className="shares-input"
							value={this.state.shares}
							onChange={this.handleInput('shares')} />
					</div>
					<div className="row">
						<label className="row-price">Market Price</label>
						<output className="row-output">{mktPrice}</output>
					</div>
					<div className="price-border"></div>
					<div className="row">
						<label className="row-value">
							{orderType === 'Buy' ? "Total Cost" : "Total Credit"}
						</label>
						<output className="row-output">{this.getValue(mktPrice)}</output>
					</div>
				</div>

				{/* <div className="signup-errors">{this.renderErrors()}</div> */}
				
				<div className="submit-order-button-div">
					<button className="sidebar-button"
						onClick = { () => 
							this.handleOrder(userId, symbol, this.state.shares, mktPrice) }
						>{orderType === 'Buy' ? "Submit Buy" : "Submit Sell"}
					</button>
				</div>
			</div>
		);

		return (
			<div className="order-form-watchlist-button">
				<form className="order-form">
					<div className="heading-div">
						<h2 className="heading-symbol">{symbol}</h2>
						<div id="chart-buttons">{buyOrSell}</div>
					</div>
					<div>{displayForm}</div>
					<div className="avail-gold-div">
						<h5 className="avail-gold">
							{orderType === 'Buy' ? `$${gold.toLocaleString()} Gold Available` : `${this.sharesAvailable(this.props.holdings)} shares available`}
						</h5>
					</div>
				</form>
				<div className="watchlist-button-div">{watchlistButton}</div>
			</div>
		);
	}
}