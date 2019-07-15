import React from 'react';
import { LoadingBar } from '../loading_bar';

class StockInfoSection extends React.Component {
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
		};

		return (
			<div className="stock-info-div">
				<div className="about-div">
					<h3 className="about-header">About</h3><br />
					<h3 className="about-p">{this.props.stock.about}</h3>
					<div className="stock-info-div-div">
						<div className="row-1">
							<div className="row-1-headers">
								<h1>CEO</h1>
								<h1>Founded</h1>
								<h1>HQ</h1>
								<h1>Industry</h1>
							</div>
							<p className="info-text">{this.props.stock.ceo}</p>
							<p className="info-text">{this.props.stock.founded}</p>
							<p className="info-text">{this.props.stock.hq}</p>
							<p className="info-text">{this.props.stock.industry}</p>
						</div>
						<div className="row-2">
							<h1></h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StockInfoSection;