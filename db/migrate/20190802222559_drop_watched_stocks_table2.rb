class DropWatchedStocksTable2 < ActiveRecord::Migration[5.2]
  def change
    drop_table :watched_stocks
  end
end
