json.array! @stocks.each do |stock|
  json.symbol stock.symbol
  json.name stock.name
end