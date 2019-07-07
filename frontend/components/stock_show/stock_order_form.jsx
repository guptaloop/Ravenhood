import React from 'react';

class StockOrderForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="order-form">
				<form>
					<label className="input">Shares
							<input type="text" className="text-box-shares" />
					</label>
					<br />
					<label className="input">Market Price   1000 gold </label>
					<br />
					<label className="input">Estimated Cost     5000 gold</label>
				</form>
			</div>
		);
	}
}

export default StockOrderForm;