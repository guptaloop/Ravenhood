json.array! @watched_stocks do |watched_stock|
  json.id watched_stock.id
  json.user_id watched_stock.user_id
  json.stock_id watched_stock.stock_id
end