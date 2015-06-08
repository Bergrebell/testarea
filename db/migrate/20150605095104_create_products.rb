class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :sku
      t.string :publisher

      t.timestamps null: false
    end
  end
end
