class AddMktPriceToStocks < ActiveRecord::Migration[5.2]
  def change
     add_column :stocks, :mkt_price, :integer
  end
end
