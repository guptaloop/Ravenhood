# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  symbol     :string           not null
#  shares     :integer          not null
#  price      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Holding < ApplicationRecord
	validates :user_id, :symbol, :shares, :price, presence: true
	validates :shares, numericality: { greater_than: 0 }

	belongs_to :user,
		foreign_key: :user_id,
		class_name: 'User'
		
end
