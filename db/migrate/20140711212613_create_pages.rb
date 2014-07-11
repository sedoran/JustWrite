class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name
      t.text :text
      t.boolean :favorite
      t.string :description
      t.references :projects
      t.references :parents

      t.timestamps
    end
  end
end
