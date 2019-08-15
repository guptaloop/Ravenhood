import React from 'react';

export const StockInfo = ({ stock }) => {
	const infoHeaders = [
<<<<<<< HEAD
		["CEO", "ceo"], ["Founder", "founder"], ["Founded", "founded"], 
		["HQ", "hq"], ["Exchange", "exchange"], ["Industry", "industry"], ["Products", "products"], ["House Words", "houseWords"]
=======
		["CEO", "ceo"], ["HQ", "hq"], ["Founder", "founder"], 
		["Founded", "founded"], ["Words", "houseWords"],	["Industry", "industry"],
		["Products", "products"], ["Exchange", "exchange"]
>>>>>>> b59d3f096cfa25f2e4083c78d1552a4f4c1695de
	];

	const displayInfo = infoHeaders.map(header => 
		<div className="row-item" key={header}>
			<h1 className="info-header">{header[0]}</h1>
			<p className="info-text">{stock[header[1]]}</p>
		</div>
	);

	return (
		<div className="stock-info-div">
			
			<div className="about-div">
				<h3 className="about-header">About</h3><br />
				<h3 className="about-p">{stock.about}</h3>
			</div>

			<div className="stock-info-div-div">{displayInfo}</div>
				
		</div>
	);
};