# Ravenhood
Ravenhood is a full-stack Game of Throne-themed of popular stock trading site Robinhood. Users can create accounts, and invest in their favorite companies in both Essos and Westeros. 

[Live Link](https://ravenhood.herokuapp.com/#/)

## Technologies
 * Frontend - **React/Redux**
 * Backend - **Ruby on Rails**, **PostreSQL**
 * [Recharts](http://recharts.org/en-US) - To interactively visualize stock price fluctuation
 * [News API](https://newsapi.org/docs/endpoints/top-headlines) - To provide curated articles for relevant stock

 ## Features
  * Secure user authentication using *Bcrypt*
  * Portfolio chart communicating performance of stocks owned
  * Search that covers 6564 stocks from the New York Stock Exchange and NASDAQ
  * Transaction system that ensures proper buying power / share ownership 
  * News Index that provides the latest stock related news
  * Watchlists allow users to keep track of interested stocks  
  * Sidebar lists all stocks in portfolio and watchlist upfront

  ### Dashboard & Portfolio
  Upon login, users are greeted with a dashboard hosting information including portfolio performance, stocks owned, stocks watched, and a news feed of recent events. 

  <p align="center">
    <img src="./assets/GreenArrowSplashStandard.gif" align="center">
  </p>

  ### Stock Show
  Several external API queries are made to pull the requisite stock data. Non-dependent API requests are made in parallel via `Promise.all`

  ```js
  export const fetchStock = symbol => dispatch => {
    const fetchAll = () => Promise.all([
      dispatch(fetchStockData(symbol)),
      dispatch(fetchStockIntradayData(symbol)),
      dispatch(fetchStockInfo(symbol)),
      dispatch(fetchStockNews(symbol))
    ]);

    StockApiUtil.fetchStock(symbol)
      .then(stock => dispatch(receiveStock(stock.tickerSymbol, stock)))
      .then(() => fetchAll());
  };
  ```

  A variety of mathematical calculations are required to communicate stock fluctuation data. The first step is to filter for the section of data relevant to a given interval. This is a necessary preprocessing step in a chosen tradeoff to minimize API calls, as all five years worth of data are pulled every query. Given the relevant slice of data, we choose the opening stock price from the relevant slice as our reference point. This reference point forms the basis of all our calculations, as can be seen in `initialStockData`.

  ```js
  filterData() {
    const { interval, stock  } = this.props;

    // returns relevant section of data given interval
    let range = INTERVAL_TO_AMOUNT_DATAPOINTS[interval];

    let data;
    if (interval === '1D') {
      data = stock.stockIntradayData;
      // Handle intraday data in 5 minute increments
      return data.filter((stock, i) => { 
        if (i % 5 === 0 && stock.close) return true;
      });
    } else {
      data = stock.stockData.slice(0);
      let end = this.calcEndIndex(data, range);
      return data.reverse().slice(0, end).reverse();
    }
  }

  findDiffReference() {
    const { interval, stock } = this.props;

    let data;
    if (interval === '1D') {
      data = stock.stockIntradayData;
    } else if (interval === '5Y') {
      data = stock.stockData;
    } else {
      let copy = stock.stockData.slice(0);
      const start = INTERVAL_TO_AMOUNT_DATAPOINTS[interval] + 1;
      const end = 2*INTERVAL_TO_AMOUNT_DATAPOINTS[interval] + 1;
      data = copy.reverse().slice(start, end).reverse(); 
    }
    return this.findReference(data);
  }

  findReference(data) {
    let values = Object.values(data);
    for (let i = 0; i < data.length - 1; i++) {
      let reference = values[i]
      if (reference) return reference.close;
    }
    return 0;
  }

  initialStockData(stock, reference) {
    const companyName = stock.companyName;
    const initPrice = this.calcInitPrice(stock);
    const priceDifferential = parseFloat((initPrice - reference).toFixed(2));
    const pctDifferential = ((initPrice - reference) / reference * 100).toFixed(2);
    return [
      companyName, 
      formatMoney(initPrice), 
      formatMoney(priceDifferential), 
      pctDifferential
    ];
  }
  ```
  ### Transaction System
  The transaction system has a series of validation checks in the backend to ensure only proper transactions are carried through. A series of errors inform the users how to modify their transaction to be valid.

  ```rb
  def create
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = current_user.id

    transaction_total = @transaction.share_difference*@transaction.share_price
    shares_owned = current_user.portfolio_shares[@transaction.ticker_symbol]
    
    if @transaction.share_difference == 0
      render json: ["Please input valid share amount"], status: 401
    elsif @transaction.share_difference > 0 && transaction_total > current_user.current_buying_power
      render json: ["Insufficient Buying Power"], status: 401
    elsif @transaction.share_difference < 0 && shares_owned < @transaction.share_difference.abs
      render json: ["Insufficient Shares"], status: 401
    else
      if @transaction.save 
        render "api/transactions/show"
      else
        render json: @transaction.errors.full_messages, status: 422
      end
    end
  end
  ```

  ### Watchlist
  Users can keep track of stocks they are interested in via watchlists. The stocks that form the watchlist can be viewed in the dashboard. 
  <p align="center">
    <img src="./assets/Watchlist-Standard.gif" align="center">
  </p>