# == Schema Information
#
# Table name: stock_watches
#
#  id         :bigint           not null, primary key
#  symbol     :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class StockWatch < ApplicationRecord
	validates :user_id, :symbol, presence: true

	belongs_to :user,
		foreign_key: :user_id,
		class_name: 'User'
	
end
