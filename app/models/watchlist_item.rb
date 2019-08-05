# == Schema Information
#
# Table name: watchlist_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

class WatchlistItem < ApplicationRecord
	validates :user_id, :stock_id, presence: true

	belongs_to :user,
		foreign_key: :user_id

	belongs_to :stock,
		foreign_key: :stock_id

end