class CreateBets < ActiveRecord::Migration[6.0]
  def change
    create_table :bets do |t|
      t.string :name
      t.string :description
      t.string :amount
      t.string :team
      t.string :spread
      t.string :teaser

      t.timestamps
    end
  end
end
