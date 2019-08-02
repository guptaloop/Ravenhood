class CreateWatchedStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :watched_stocks do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false

      t.timestamps
    end
    add_index :watched_stocks, :user_id, unique: true
    add_index :watched_stocks, :stock_id, unique: true
  end
end
