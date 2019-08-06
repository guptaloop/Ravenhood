class StockWatch < ApplicationRecord
	validates :user_id, :symbol, presence: true

	belongs_to :user,
		foreign_key: :user_id
	
end