# Ravenhood
Ravenhood is a full-stack Game of Throne-themed of popular stock trading site Robinhood.
Users can create accounts, and invest in their favorite companies in both Essos and Westeros. 

[Live Link](https://ravenhood.herokuapp.com/#/)

## Technologies
 * Frontend - **React/Redux**
 * Backend - **Ruby on Rails**, **PostreSQL**
 * [Recharts](http://recharts.org/en-US) - To interactively visualize stock price fluctuation
 * [News API](https://newsapi.org/docs/endpoints/top-headlines) - To provide curated articles for relevant stock

 ## Features
  * Secure user authentication using *Bcrypt*
  * Charts showing performance of user's portfolio and individual companies
  * Transaction system for users to seamlessly make trades
  * Watchlists allow users to keep track of interesting companies  
  * Sidebar lists all stocks in portfolio and watchlist
  * YouTube API that provides relevant videos for research
  * Search bar & seed data that includes the Great Houses re-imagined as modern corporations

  ### Dashboard & Portfolio
  Upon login, users are greeted with a dashboard hosting information including portfolio valuation, stocks owned, stocks watched, and a video feed of relevant YouTube content.


  <p align="center">
    <img src="./assets/Ravenhood.gif" align="center">
  </p>


### Trading System
The main feature of Ravenhood (a stock trading app) is a seamless trading system, where users can easily buy / sell shares with the click of a button.

This turned out to be the most challenging feature of the project. It touched every piece of the stack and required handling for several different trade scenarios, with even more data points to manage. I decided to first figure out if the user owns the stock they are trying to trade, then handle the Sell or Buy accordingly. Sells and Buys have 2 further scenarios each and the right set of data needed to be routed to the controller to check if the trade could be made, update the database accordingly. Upon a successful trade, the shares owned will update without a page refresh, leading to a smooth experience for the user.


```JS
  stock_order_form.jsx

	handleOrder(user_id, symbol, shares, price) {
		let index, holding_id;
		const ownedStocks = this.props.holdings.map(holding => holding.symbol);
		const type = this.state.orderType;
		const userOwnsStock = ownedStocks.includes(symbol);
	
		if (userOwnsStock) {
			index = ownedStocks.indexOf(symbol);
			holding_id = this.props.holdings[index].id;
		}

		if (type === 'Sell') {
			const sellShares = (shares * -1);
			shares === this.props.holdings[index].shares ?
				this.props.destroyHolding(holding_id, user_id)
				:	this.props.updateHolding(holding_id, user_id, sellShares);
			this.setState({ shares: "0" });
		}

		if (type === 'Buy') {
			userOwnsStock ?	
				this.props.updateHolding(holding_id, user_id, shares)
				:	this.props.buyStock(user_id, symbol, shares, price);
			this.setState({ shares: "0" });
		}
  }
```