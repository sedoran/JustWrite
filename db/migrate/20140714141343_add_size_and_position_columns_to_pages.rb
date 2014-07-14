class AddSizeAndPositionColumnsToPages < ActiveRecord::Migration
  def change
    add_column :pages, :left, :string
    add_column :pages, :top, :string
    add_column :pages, :height, :string
    add_column :pages, :width, :string
  end
end
