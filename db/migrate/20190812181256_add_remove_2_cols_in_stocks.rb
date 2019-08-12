class AddRemove2ColsInStocks < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :valuation, :integer
    remove_column :stocks, :employees, :integer
    add_column :stocks, :founder, :string
    add_column :stocks, :market_cap, :string
  end
end
