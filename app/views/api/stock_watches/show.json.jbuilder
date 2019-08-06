json.array! @watched_stocks do |watched_stock|
	json.id watched_stock.id
	json.symbol watched_stock.symbol
	json.user_id watched_stock.user_id
end