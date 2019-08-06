class Api::WatchlistItemsController < ApplicationController

	def index
		@watched_stocks = WatchlistItem.all

		if @watched_stocks
			render :show
			# send all the watched_stocks up, filter on the front end
		else
			render json: "unable to retrieve watched stocks"
		end
	end

	def create
		@watchlist_item = WatchlistItem.new(watchlist_item_params)
		
		if @watchlist_item.save
			render json: "stock added to watchlist!"
		else
			render json: @watchlist_item.errors.full_messages
		end
	end

	def destroy
		@watchlist_item = WatchlistItem.find_by(
			user_id: params[:user_id], stock_id: params[:stock_id])

		if @watchlist_item.delete
			render json: "stock removed from watchlist!"
		else
			render json: @watchlist_item.errors.full_messages
		end
	end
	
	private
	def watchlist_item_params
		params.require(:watchlist_item).permit(:id, :user_id, :stock_id)
	end
end