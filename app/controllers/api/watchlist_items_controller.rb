class Api::WatchlistItemsController < ApplicationController

	def create
		@watchlist_item = WatchlistItem.new(watchlist_item_params)
		
		if @watchlist_item.save
			render json: "stock successfully added to watchlist!"
		else
			render json: @watchlist_item.errors.full_messages
		end
	end

	def destroy
		
	end
	
	private
	def watchlist_item_params
		params.permit(:user_id, :stock_id)
	end
end