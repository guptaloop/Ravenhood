class Change2ColumnsInStocks < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :employees, :integer
    remove_column :stocks, :valuation, :integer
    add_column :stocks, :house_words, :string, null: false
    add_column :stocks, :founder, :string, null: false
  end
end
