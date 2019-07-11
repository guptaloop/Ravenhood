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

	componentWillMou() {
		// randomly generate price before component renders
		this.state.price = (Math.floor(((Math.random() + 0.005) * 1000)));
	}

	handleInput(type) {
		return(e) => {
			this.setState({ [type]: e.target.value });
		};
	}

	getCost() {
		const price = this.state.price;
		const shares = this.state.shares;
		return (price * shares);
	}

	render() {
		const symbol = this.props.match.params.symbol;

		return (
				<form className="order-form">
					<div className="heading">
						<h2 className="heading-symbol">{symbol}</h2>
						{/* will need an eventHandler on this */}
						<button className="heading-order-type-tog">Buy / Sell</button>
					</div>

					<div className="order-atts">
						
						<div className="row">
							<label>Shares</label>
							<input
								type="text"
								placeholder="full shares only"
								className="row-shares"
								value={this.state.shares}
								onChange={this.handleInput('shares')}/>
						</div>
						
						<div className="row">
							<label className="row-price">Market Price</label>
							<output className="row-output">{this.state.price}</output>
						</div>

						<div className="row">
							<label>Total Cost</label>
							<output className="row-output">{this.getCost()}</output>
						</div>

					</div>
					
				</form>
		);
	}
}

export default StockOrderForm;