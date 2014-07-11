class ChangeParentsIdToParentId < ActiveRecord::Migration
  def change
    rename_column :pages, :parents_id, :parent_id
  end
end
