class CreateTodos < ActiveRecord::Migration[8.1]
  def change
    create_table :todos do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.text :context
      t.boolean :completed, null: false, default: false
      t.date :due_date

      t.timestamps
    end
  end
end
