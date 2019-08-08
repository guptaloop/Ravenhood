import React from 'react';

export default class StockOrderForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shares: 0
			// order_type: "buy" or buy: false,
		};
		this.getCost = this.getCost.bind(this);
	}

	handleInput(type) {
		return(e) => {
			console.log(this.state);
			this.setState({ [type]: parseInt(e.target.value) });
		};
	}

	getCost(mktPrice) { (mktPrice * this.state.shares).toFixed(2);	}

	render() {
		const mktPrice = this.props.stock.mktPrice;
		// const watchlistButton = <button ></button>
		
		return (
			<div className="order-form-watchlist-button">
				<form className="order-form">
					<div className="heading-div">
						<h2 className="heading-symbol">{this.props.stock.symbol}</h2>
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
						<button className="sidebar-button">Submit Order</button>
					</div>

					<div className="avail-gold-div">
						{/* need to pull avail gold from users */}
						<h5 className="avail-gold">5000 Gold Available</h5>
					</div>
				</form>
				{/* <div className="watchlist-button-div">{watchlistButton}</div> */}
			</div>
		);
	}
}