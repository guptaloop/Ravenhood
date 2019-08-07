class Api::StockWatchesController < ApplicationController
	
	def list
		@user = User.find_by(id: params[:user_id])

		if @user
			render :show
		else
			render json: "unable to retrieve user's watchlist"
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
