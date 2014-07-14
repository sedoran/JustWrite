class RemoveFavoriteColumnsFromPagesAndProjects < ActiveRecord::Migration
  def up
    remove_column :pages, :favorite 
    remove_column :projects, :favorite
  end

  def down
    add_column :pages, favorites: boolean
    add_column :projects, favorites: boolean
  end
end
