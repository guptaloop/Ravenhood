### Updating Heroku database
# run `heroku bundle exec rails db:migrate` and `db:seed`
# use `heroku run bundle exec rails console` to check database


ActiveRecord::Base.transaction do 
	User.destroy_all
	Stock.destroy_all
	StockWatch.destroy_all
		
	demo_user = User.create({ 
			username: 'Lord Petyr Baelish',
			password: 'makeitrain'
		})

	lion_stock = Stock.create({
		symbol: 'LION',
		name: 'Lannister Enterprises',
		about: "For centuries, Lannister Enterprises has been the wealthiest company the Realm has ever seen. The firm has reached new heights under the stewardship of Tywin Lannister.",
		ceo: "Tywin Lannister",
		hq: "Casterly Rock",
		founder: "Lann the Clever",
		founded: "Age of Heroes",
		exchange: "Seven Kingdoms Exchange",
		industry: "defense, finance",
		products: "wildfire, gold",
		market_cap: "$932.84B",
		mkt_price: 1848.42,
		youtube_query: 'house lannister'
	})

	free_stock = Stock.create({
		symbol: "FREE",
		name: "Free Folk, Inc.",
		about: "Free Folk, Inc. was born out of a misunderstanding. Their business continues to shrink due to increasingly fierce competition and geographical conditions.",
		ceo: "Mance Rayder",
		hq: "Hardhome",
		founder: "unknown",
		founded: "Era of the First Men",
		exchange: "unlisted",
		industry: "outdoor goods",
		products: "snowshoes, rope, parkas",
		market_cap: "$12.6B",
		mkt_price: 4.65,
		youtube_query: 'wildlings'
	})

	wntr_stock = Stock.create({
		symbol: "WNTR",
		name: "Stark Company",
		about: "The Stark Company has built its successful business on the humble principles of trust and loyalty. The Starks remain conservative, despite the recent economic boom in Westeros.",
		ceo: "Eddard 'Ned' Stark",
		hq: "Winterfell",
		founder: "Bran the Builder",
		founded: "Age of Heroes",
		exchange: "Seven Kingdoms Exchange",
		industry: "defense, agriculture",
		products: "swords, armor, grain",
		market_cap: "$351.56B",
		mkt_price: 222.84,
		youtube_query: 'wildlings'
	})

	fire_stock = Stock.create({
		symbol: "FIRE",
		name: "Targaryen Holdings",
		about: "Targaryen Holdings' nearly 300-year reign as the most powerful company in the Known World was recently disrupted by ruthless startup - Baratheon & Brothers. The company is on life support - clinging to its last remote holdings in Essos.",
		ceo: "Daenerys Targaryen",
		hq: "Dragonstone",
		founder: "Aegon the Conqueror",
		founded: "1 AC",
		exchange: "Free Cities Exchange",
		industry: "magic",
		products: "dragon eggs",
		market_cap: "$145.6M",
		mkt_price: 1.88,
		youtube_query: 'targaryen'
	})

	vale_stock = Stock.create({
		symbol: "VALE",
		name: "Arryn Defense",
		about: "The Arryn's have built the most ironclad balance sheet the Realm has ever seen. But the sudden death of long-time CEO Jon Arryn has left the future of the company in the hands of his 6-year-old son Robin.",
		ceo: "Robin Arryn",
		hq: "Eyrie",
		founder: "Ser Artys Arryn",
		founded: "Coming of the Andals",
		exchange: "Seven Kingdoms Exchange",
		industry: "defense, prisons",
		products: "moon gates, sky cells",
		market_cap: "$231.58B",
		mkt_price: 165.15,
		youtube_query: 'house arryn'
	})

	# stock template

	# symbol_stock = Stock.create({
		# symbol: "",
		# name: "",
		# about: "",
		# ceo: "",
		# hq: "",
		# founded: "",
		# founder: "",
		# exchange: "",
		# industry: "",
		# products: "",
		# market_cap: "",
		# mkt_price: 
			# should be between 0 - 1000
		# youtube_query: ''
	# })

	demo_watchlist1 = StockWatch.create({
		user_id: 1,
		symbol: 'LION'
	})
	demo_watchlist2 = StockWatch.create({
		user_id: 1,
		symbol: 'FREE'
	})
	demo_watchlist3 = StockWatch.create({
		user_id: 1,
		symbol: 'WNTR'
	})
	demo_watchlist4 = StockWatch.create({
		user_id: 1,
		symbol: 'FIRE'
	})
	demo_watchlist5 = StockWatch.create({
		user_id: 1,
		symbol: 'VALE'
	})

	demo_holding = Holding.create({
		user_id: 1,
		symbol: 'FREE',
		shares: 100,
		price: 4.65
	})

end