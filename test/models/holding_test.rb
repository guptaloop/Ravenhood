# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  symbol     :string           not null
#  shares     :integer          not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class HoldingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
