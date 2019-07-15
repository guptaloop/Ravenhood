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
				</div>

				<div className="stock-info-div-div">
						<div className="row-item">
							<h1 className="info-header">CEO</h1>
							<p className="info-text">{this.props.stock.ceo}</p>
						</div>
						<div className="row-item">
							<h1 className="info-header">Founded</h1>
							<p className="info-text">{this.props.stock.founded}</p>
						</div>
						<div className="row-item">
							<h1 className="info-header">HQ</h1>
							<p className="info-text">{this.props.stock.hq}</p>
						</div>
						<div className="row-item">
							<h1 className="info-header">Industry</h1>
							<p className="info-text">{this.props.stock.industry}</p>
						</div>
						<div className="row-item">
							<h1 className="info-header">Exchange</h1>
							<p className="info-text">{this.props.stock.exchange}</p>
						</div>
						<div className="row-item">
							<h1 className="info-header">Products</h1>
							<p className="info-text">{this.props.stock.products}</p>
						</div>
						<div className="row-item">
							<h1 className="info-header">Employees</h1>
							<p className="info-text">{this.props.stock.employees}</p>
						</div>
						<div className="row-item">
							<h1 className="info-header">Valuation</h1>
							<p className="info-text">{this.props.stock.valuation}</p>
						</div>
				</div>
					
			</div>
		);
	}
}

export default StockInfoSection;