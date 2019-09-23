class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.string :username, null: false
      t.integer :time_elapsed, null: false

      t.timestamps
    end
  end
end
