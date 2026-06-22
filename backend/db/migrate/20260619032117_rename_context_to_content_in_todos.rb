class RenameContextToContentInTodos < ActiveRecord::Migration[8.1]
  def change
    rename_column :todos, :context, :content
  end
end
