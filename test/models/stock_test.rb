# == Schema Information
#
# Table name: stocks
#
#  id         :bigint(8)        not null, primary key
#  symbol     :string           not null
#  name       :string           not null
#  about      :text             not null
#  ceo        :string           not null
#  founded    :string           not null
#  hq         :string           not null
#  industry   :string           not null
#  exchange   :string           not null
#  products   :string           not null
#  employees  :integer          not null
#  valuation  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
