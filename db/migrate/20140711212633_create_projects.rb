class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.boolean :favorite
      t.references :users

      t.timestamps
    end
  end
end
