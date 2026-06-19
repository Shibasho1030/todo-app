class Api::V1::TodosController < ApplicationController
  before_action :authenticate_user

  def index
    todos = current_user.todos.order(created_at: :desc)
    render json: todos
  end

  def show
    todo = current_user.todos.find(params[:id])
    render json: todo
  end

  def create
    todo = current_user.todos.build(todo_params)

    if todo.save
      render json: todo, status: :created
    else
      render json: { errors: todo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    todo = current_user.todos.find(params[:id])

    if todo.update(todo_params)
      render json: todo
    else
      render json: { errors: todo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    todo = current_user.todos.find(params[:id])
    todo.destroy

    head :no_content
  end

  private
  
  def todo_params
    params.require(:todo).permit(:title, :content, :completed, :due_date)
  end
end
