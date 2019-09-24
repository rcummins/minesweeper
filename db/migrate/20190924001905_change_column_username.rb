class ChangeColumnUsername < ActiveRecord::Migration[5.2]
  def up
    change_column :scores,
      :username,
      :string,
      { limit: 30, default: 'MysteriousSweeper'}
  end

  def down
    change_column :scores, :username, :string
  end
end
