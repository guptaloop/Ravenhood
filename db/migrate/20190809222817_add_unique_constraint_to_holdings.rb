class AddUniqueConstraintToHoldings < ActiveRecord::Migration[5.2]
  def change
  end
  add_index :holdings, [:symbol, :user_id], unique: true
end
