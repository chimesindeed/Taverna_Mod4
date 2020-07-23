class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :body
      t.integer :item_id
      t.timestamps
    end
  end
end
