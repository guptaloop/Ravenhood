json.array! @user.holdings do |holding|
	json.id holding.id
	json.user_id holding.user_id
	json.symbol holding.symbol
	json.price holding.price
	json.shares holding.shares
end