class UpdateUniquenessConstraintsInWatchlistItems < ActiveRecord::Migration[5.2]
  def change

  end
  remove_index :watchlist_items, :stock_id
  remove_index :watchlist_items, :user_id
  add_index :watchlist_items, [:stock_id, :user_id], unique: true
end
