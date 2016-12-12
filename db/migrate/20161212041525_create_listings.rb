class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.text :title
      t.text :description
      t.text :address
      t.string :city
      t.integer :postcode
      t.integer :cost
      t.integer :bed
      t.integer :bath
      t.integer :car
      t.integer :user_id
      t.integer :favorite_id

      t.timestamps
    end
  end
end
