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

require 'test_helper'

class StockWatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
