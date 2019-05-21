class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol, null: false
      t.string :name, null: false
      t.text :about, null: false
      t.string :c_suite, null: false
      t.string :founded, null: false
      t.string :hq, null: false
      t.string :industry, null: false
      t.string :exchange, null: false
      t.string :products, null: false
      t.integer :employees, null: false
      t.integer :valuation, null: false

      t.timestamps
    end
    add_index :stocks, :symbol, unique: true
  end
end
