class Api::StocksController < ApplicationController

	# for search bar MVP 
	def index
    @stocks = Stock.all
  end
	
	# for stock page MVP
  def show
		@stock = Stock.find_by(symbol: params[:symbol])
		render "api/stocks/show"
  end
	
end