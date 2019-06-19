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

	lion_stock = Stock.create({
		symbol: 'LION',
		name: 'Lannister Enterprises',
		about: "Lannister Enterprises has recently become the largest company the Realm has ever seen. Stockholders question the firm's ethics & stability after a slew of recent scandals and betrayals.",
		c_suite: "Tywin Lannister, Cersei Lannister, Jamie Lannister",
		founded: "era of the First Men",
		hq: "Casterly Rock",
		industry: "consumer staples, defense",
		exchange: "Seven Kingdoms Exchange",
		products: "barley, millet, heavy weaponry, armor, wildfire",
		employees: 1000000,
		valuation: 20000000
	})

	free_stock = Stock.create({
		symbol: "FREE",
		name: "Free Folk, Inc.",
		about: "Free Folk, Inc. was born out of a misunderstanding. Their business continues to shrink due to increasingly fierce competition and geographical conditions.",
		c_suite: "Mance Rayder, Lord of Bones, Tormund Giantsbane",
		founded: "era of the First Men",
		hq: "Hardhome",
		industry: "sporting goods, defense",
		exchange: "unlisted",
		products: "snowshoes, wall-climbing gear, light weaponry, siege weaponry",
		employees: 10000,
		valuation: 100000
	})

	# stock template

	# symbol_stock = Stock.create({
		# symbol: '',
		# name: '',
		# about: '',
		# c_suite: '',
		# founded: '',
		# hq: '',
		# industry: '',
		# exchange: '',
		# products: '',
		# employees: '',
		# valuation: ''
	# })

end