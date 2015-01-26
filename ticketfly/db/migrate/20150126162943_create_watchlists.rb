class CreateWatchlists < ActiveRecord::Migration
  def change
    create_table :watchlists do |t|
      t.string :venue
      t.string :location
      t.string :artists
      t.string :date

      t.timestamps null: false
    end
  end
end
