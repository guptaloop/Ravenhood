class AddGoldToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gold, :integer
  end
end
