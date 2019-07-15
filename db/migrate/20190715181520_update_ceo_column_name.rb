class UpdateCeoColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :stocks, :c_suite, :ceo
  end
end
