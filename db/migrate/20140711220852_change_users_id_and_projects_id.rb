class ChangeUsersIdAndProjectsId < ActiveRecord::Migration
  def change
    rename_column :projects_users, :users_id, :user_id
    rename_column :projects_users, :projects_id, :project_id
  end
end
