import React from 'react';

class StockOrderForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			price: 0,
			shares: 0,
			// order_type: "buy" or buy: false,
		};
		this.getCost = this.getCost.bind(this);
	}

	componentWillMount() {
		// randomly generate price before component renders
		this.state.price = (((Math.random() + 0.005) * 1000)).toFixed(2);
	}

	handleInput(type) {
		return(e) => {
			this.setState({ [type]: e.target.value });
		};
	}

	getCost() {
		const price = this.state.price;
		const shares = this.state.shares;
		return (price * shares).toFixed(2);
	}

	render() {
		const symbol = this.props.match.params.symbol;

		return (
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
							<output className="row-output">{this.state.price}</output>
						</div>
						<div className="price-border"></div>
						<div className="row">
							<label className="row-value">Total Value</label>
							<output className="row-output">{this.getCost()}</output>
						</div>
					</div>
					
					<div className="submit-order-button-div">
						<button className="submit-order-button">Submit Order</button>
					</div>

					<div className="avail-gold-div">
						<h5 className="avail-gold">{this.state.price} Gold Available</h5>
					</div>
				</form>
		);
	}
}

export default StockOrderForm;