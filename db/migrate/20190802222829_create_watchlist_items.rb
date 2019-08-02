class CreateWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_items do |t|

      t.timestamps
    end
  end
end
