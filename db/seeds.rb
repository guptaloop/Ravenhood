### Updating Heroku database
# run `heroku bundle exec rails db:migrate` and `db:seed`
# use `heroku run bundle exec rails console` to check database


ActiveRecord::Base.transaction do 
  User.destroy_all
	Stock.destroy_all
		
	demo_user = User.create({ 
			username: 'Lord Petyr Baelish',
			password: 'makeitrain'
		})
	
	demo_user_watched_stocks = WatchlistItem.create({
		user_id: 1,
		stock_id: 2
	})

	lion_stock = Stock.create({
		symbol: 'LION',
		name: 'Lannister Enterprises',
		about: "Lannister Enterprises has recently become the largest company the Realm has ever seen. Stockholders question the firm's ethics & stability after a slew of recent scandals and betrayals.",
		ceo: "Tywin Lannister",
		founded: "era of the First Men",
		hq: "Casterly Rock",
		industry: "consumer staples, defense",
		exchange: "Seven Kingdoms Exchange",
		products: "barley, millet, heavy weaponry, armor, wildfire",
		employees: 1000000,
		valuation: 20000000,
		mkt_price: 1848.12,
		youtube_query: 'house lannister'
	})

	free_stock = Stock.create({
		symbol: "FREE",
		name: "Free Folk, Inc.",
		about: "Free Folk, Inc. was born out of a misunderstanding. Their business continues to shrink due to increasingly fierce competition and geographical conditions.",
		ceo: "Mance Rayder",
		founded: "era of the First Men",
		hq: "Hardhome",
		industry: "sporting goods, defense",
		exchange: "unlisted",
		products: "snowshoes, wall-climbing gear, light weaponry, siege weaponry",
		employees: 10000,
		valuation: 100000,
		mkt_price: 49.65,
		youtube_query: 'wildlings'
	})

	# stock template

	# symbol_stock = Stock.create({
		# symbol: '',
		# name: '',
		# about: '',
		# ceo: '',
		# founded: '',
		# hq: '',
		# industry: '',
		# exchange: '',
		# products: '',
		# employees: ,
		# valuation: ,
		# mkt_price: 
			# must be between 0 - 1000
		# youtube_query: ''
	# })

end