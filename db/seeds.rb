### Updating Heroku database
# run `heroku bundle exec rails db:migrate` and `db:seed`
# use `heroku run bundle exec rails console` to check database


ActiveRecord::Base.transaction do 
	User.destroy_all
	Stock.destroy_all
	StockWatch.destroy_all
	Holding.destroy_all
		
	demo_user = User.create({ 
		username: 'Lord Petyr Baelish',
		password: 'ChAoS_iSSa_LaDdEr'
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
		industry: "Defense, Finance",
		products: "Wildfire, Gold",
		house_words: "Hear Me Roar",
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
		industry: "Outdoor Goods",
		products: "Snowshoes, Rope, Parkas",
		house_words: "We Don't Kneel",
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
		industry: "Defense, Agriculture",
		products: "Swords, Armor, Grain",
		house_words: "Winter Is Coming",
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
		industry: "Magic",
		products: "Dragon Eggs",
		house_words: "Fire & Blood",
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
		founded: "Andal Invasion",
		exchange: "Seven Kingdoms Exchange",
		industry: "Defense, Prisons",
		products: "Moongate, Skycell",
		house_words: "As High As Honor",
		mkt_price: 165.15,
		youtube_query: 'house arryn'
	})
	rose_stock = Stock.create({
		symbol: "ROSE",
		name: "Tyrell Foods",
		about: "The Tyrell's can trace their farming roots back to the legendary Garth the Gardener. These trade secrets and fertile land has given them a monopoly over Westeros' food production.",
		ceo: "Mace Tyrell",
		hq: "Highgarden",
		founder: "Ser Alester Tyrell",
		founded: "Age of Heroes",
		exchange: "Seven Kingdoms Exchange",
		industry: "Consumer Staples",
		products: "Flowers, Organic Foods",
		house_words: "Growing Strong",
		mkt_price: 498.14,
		youtube_query: 'house tyrell'
	})
	rvrn_stock = Stock.create({
		symbol: "RVRN",
		name: "Tully Group",
		about: "The Tully Group has owned some of the hottest real estate in Westeros for thousands of years. They are a stable company with good business relations across most of The Seven Kingdoms.",
		ceo: "Ser Brynden Tully",
		hq: "Riverrun",
		founder: "Ser Edmure Tully",
		founded: "Age of Heroes",
		exchange: "Seven Kingdoms Exchange",
		industry: "Real Estate",
		products: "Riverfront Property",
		house_words: "Family, Duty, Honor",
		mkt_price: 218.41,
		youtube_query: 'house tully'
	})
	stag_stock = Stock.create({
		symbol: "STAG",
		name: "Baratheon & Brothers",
		about: "The Baratheon brothers have earned their reputation as an unstoppable force after dethroning the Targaryens. However, critics question the firm's long-term viability due to succession concerns.",
		ceo: "King Robert I Baratheon",
		hq: "Storm's End",
		founder: "Orys 'One-Hand' Baratheon",
		founded: "1 AC",
		exchange: "Seven Kingdoms Exchange",
		industry: "Defense, Alcohol",
		products: "Steel, Ale",
		house_words: "Ours Is The Fury",
		mkt_price: 765.98,
		youtube_query: 'baratheon'
	})
	sand_stock = Stock.create({
		symbol: "SAND",
		name: "Martell Technologies",
		about: "The Martell's are notorious for being the only company in Westeros to outlast a corporate takeover by Targaryen Holdings - not once, but twice. Their secrecy and ties to Essos has kept them ahead of their competitors.",
		ceo: "Doran Martell",
		hq: "Sunspear",
		founder: "Morgan Martell",
		founded: "Andal Invasion",
		exchange: "Seven Kingdoms Exchange",
		industry: "Defense, Technology",
		products: "Anti-aircraft, Poison",
		house_words: "Unbowed, Unbent, Unbroken",
		mkt_price: 365.45,
		youtube_query: 'house martell'
	})

	demo_watchlist_1 = StockWatch.create({
		user_id: 1,
		symbol: 'LION'
	})
	demo_watchlist_2 = StockWatch.create({
		user_id: 1,
		symbol: 'FREE'
	})
	demo_watchlist_3 = StockWatch.create({
		user_id: 1,
		symbol: 'WNTR'
	})
	demo_watchlist_4 = StockWatch.create({
		user_id: 1,
		symbol: 'FIRE'
	})

	demo_holding_1 = Holding.create({
		user_id: 1,
		symbol: 'VALE',
		shares: 60,
		price: 165.15,
	})
	demo_holding_2 = Holding.create({
		user_id: 1,
		symbol: 'ROSE',
		shares: 100,
		price: 498.14,
	})
	demo_holding_3 = Holding.create({
		user_id: 1,
		symbol: 'RVRN',
		shares: 250,
		price: 218.41,
	})

end