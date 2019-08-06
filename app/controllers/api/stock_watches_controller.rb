class Api::StockWatchesController < ApplicationController
	
	def index
		@watched_stocks = StockWatch.all

		if @watched_stocks
			render :show
			# send all the watched_stocks up, filter on the front end
		else
			render json: "unable to retrieve watched stocks"
		end
	end

	def create
		@stock_watch = StockWatch.new(stock_watch_params)
		
		if @stock_watch.save
			render json: "stock added to watchlist!"
		else
			render json: @stock_watch.errors.full_messages
		end
	end

	def destroy
		@stock_watch = StockWatch.find(params[:id])

		if @stock_watch
			@stock_watch.delete
			render json: "stock removed from watchlist!"
		else
			render json: @stock_watch.errors.full_messages
		end
	end
	
	private
	def stock_watch_params
		params.require(:stock_watch).permit(:user_id, :symbol)
	end
	
end
