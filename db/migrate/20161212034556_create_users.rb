class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :pasword_digest
      t.integer :listing_id
      t.integer :favorite_id

      t.timestamps
    end
  end
end
