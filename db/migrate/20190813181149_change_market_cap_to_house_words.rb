class ChangeMarketCapToHouseWords < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :market_cap, :string
    add_column :stocks, :house_words, :string
  end
end
