class AddYoutubeQueryToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :youtube_query, :string
  end
end
