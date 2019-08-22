export const sumPortfolioValue = holdings => {
	let portfolioValue = 0;
	holdings.forEach(holding => portfolioValue += holding.shares * holding.price);
	return portfolioValue;
};

let holdings = [
	{symbol: "FIRE", price: 10, shares: 200},
	{symbol: "FIRE", price: 20, shares: 200},
	{symbol: "FIRE", price: 30, shares: 200},
];