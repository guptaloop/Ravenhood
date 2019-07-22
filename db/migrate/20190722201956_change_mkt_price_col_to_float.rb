class ChangeMktPriceColToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :mkt_price, :float
  end
end
