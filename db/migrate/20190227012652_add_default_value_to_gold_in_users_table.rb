class AddDefaultValueToGoldInUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :gold, :integer, :default => 500000
  end
end
