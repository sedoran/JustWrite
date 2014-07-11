class CreateUsersProjectsTable < ActiveRecord::Migration
  def change
    create_table :users_projects_tables do |t|
      t.references :users
      t.references :projects
    end
  end
end
