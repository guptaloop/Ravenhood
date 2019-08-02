class WatchlistItem < ApplicationRecord
	validates :user_id, :stock_id, presence: true

	belongs_to :user,
		foreign_key: :user_id

	belongs_to :stock,
		foreign_key: :stock_id

end
