class ChangePriceToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :holdings, :price, :float
  end
end
