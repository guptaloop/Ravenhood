import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class StockShowPage extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	currentUser,
		// 	stock
		// 	};
		}
		
		
	render() {
		return (
			<div className="stock-show">
				<NavBarContainer />
			
				<div className="chart-order-about-div">

					<div className="chart-order-div">
						<div className="price-chart">
							<input
								type="text"
								className="price-chart-box"
								placeholder="Price Chart [coming soon]"
							/>
						</div>
					
						<div className="order-form">
							<form>
								<label className="input">Shares
									<input type="text" className="text-box-shares"/>
								</label>
								<br />
								<label className="input">Market Price   1000 gold </label>
								<br />
								<label className="input">Estimated Cost     5000 gold</label>
							</form>
						</div>
					</div>

					<div className="stock-info-div">
						<div className="about-div">
							<h3 className="about-header">About</h3><br />
							<p className="about-p">Lannister Enterprises has recently become the largest company the Realm has ever seen. Stockholders question the firm's ethics & stability after a slew of recent scandals and betrayals</p>
						<div className="stock-info-div-div">
							<div className="row-1">
								<div className="row-1-headers">
									<h1>C Suite</h1> 
									<h1>Founded</h1>
									<h1>HQ</h1> 
									<h1>Industry</h1> 
								</div>
									<p className="info-text">Tywin Lannister, Cersei Lannister, Jamie Lannister"</p>
									<p className="info-text">era of the First Men</p>
									<p className="info-text">Casterly Rock</p>
									<p className="info-text">consumer staples, defense</p>
							</div>
							<div className="row-2">
								<h1></h1> 
							</div>
						</div>
						</div>
					</div>

				
				</div>

			</div>
	);
	}
};

export default StockShowPage;