import React from 'react';

export const StockInfo = ({ stock }) => (
	<div className="stock-info-div">
		
		<div className="about-div">
			<h3 className="about-header">About</h3><br />
			<h3 className="about-p">{stock.about}</h3>
		</div>

		<div className="stock-info-div-div">
				<div className="row-item">
					<h1 className="info-header">CEO</h1>
					<p className="info-text">{stock.ceo}</p>
				</div>
				<div className="row-item">
					<h1 className="info-header">Founded</h1>
					<p className="info-text">{stock.founded}</p>
				</div>
				<div className="row-item">
					<h1 className="info-header">HQ</h1>
					<p className="info-text">{stock.hq}</p>
				</div>
				<div className="row-item">
					<h1 className="info-header">Industry</h1>
					<p className="info-text">{stock.industry}</p>
				</div>
				<div className="row-item">
					<h1 className="info-header">Exchange</h1>
					<p className="info-text">{stock.exchange}</p>
				</div>
				<div className="row-item">
					<h1 className="info-header">Products</h1>
					<p className="info-text">{stock.products}</p>
				</div>
				<div className="row-item">
					<h1 className="info-header">Employees</h1>
					<p className="info-text">{stock.employees}</p>
				</div>
				<div className="row-item">
					<h1 className="info-header">Valuation</h1>
					<p className="info-text">{stock.valuation}</p>
				</div>
		</div>
			
	</div>
);