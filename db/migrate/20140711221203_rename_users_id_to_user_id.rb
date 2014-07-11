class RenameUsersIdToUserId < ActiveRecord::Migration
  def change
    rename_column :projects, :users_id, :user_id
  end
end
