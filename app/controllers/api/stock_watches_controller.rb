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
		@user = User.find_by(id: params[:user_id])
		@stock_watch = StockWatch.new(
			user_id: params[:user_id], symbol: params[:symbol])
		
		if @stock_watch.save
			render :show
		else
			render json: @stock_watch.errors.full_messages
		end
	end

	def destroy
		@user = User.find_by(id: params[:user_id])
		@stock_watch = StockWatch.find(params[:id])

		if @stock_watch
			@stock_watch.delete
			render :show
		else
			render json: @stock_watch.errors.full_messages
		end
	end
		
end
