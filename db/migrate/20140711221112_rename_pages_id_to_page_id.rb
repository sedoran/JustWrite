class RenamePagesIdToPageId < ActiveRecord::Migration
  def change
    rename_column :pages, :projects_id, :project_id
  end
end
