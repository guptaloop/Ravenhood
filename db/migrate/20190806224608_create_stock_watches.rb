class CreateStockWatches < ActiveRecord::Migration[5.2]
  def change
    create_table :stock_watches do |t|
      t.string :symbol, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
      add_index :stock_watches, [:symbol, :user_id], unique: true
  end
end