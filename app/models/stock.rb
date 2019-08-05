# == Schema Information
#
# Table name: stocks
#
#  id            :bigint           not null, primary key
#  symbol        :string           not null
#  name          :string           not null
#  about         :text             not null
#  ceo           :string           not null
#  founded       :string           not null
#  hq            :string           not null
#  industry      :string           not null
#  exchange      :string           not null
#  products      :string           not null
#  employees     :integer          not null
#  valuation     :integer          not null
#  mkt_price     :float            not null
#  youtube_query :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null


class Stock < ApplicationRecord
	## no validations needed at model level, all data for this table will be seeded from seeds.rb and validated via db constraints.

	has_many :watchers,
		foreign_key: :stock_id

end