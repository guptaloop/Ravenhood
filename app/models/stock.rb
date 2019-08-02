# == Schema Information
#
# Table name: stocks
#
#  id         :bigint(8)        not null, primary key
#  symbol     :string           not null
#  name       :string           not null
#  about      :text             not null
#  ceo 		    :string           not null
#  founded    :string           not null
#  hq         :string           not null
#  industry   :string           not null
#  exchange   :string           not null
#  products   :string           not null
#  employees  :integer          not null
#  valuation  :integer          not null

class Stock < ApplicationRecord
	## no validations needed at model level, all data for this table will be seeded from seeds.rb and validated via db constraints.

	has_many :watchlist_items,
		foreign_key: :stock_id

end