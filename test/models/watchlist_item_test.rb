# == Schema Information
#
# Table name: watchlist_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class WatchlistItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
