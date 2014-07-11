class ChangeUsersProjectsToProjectsUsers < ActiveRecord::Migration
  def change
    rename_table :users_projects_tables, :projects_users
  end
end
