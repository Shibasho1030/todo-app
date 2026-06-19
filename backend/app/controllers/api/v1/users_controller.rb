class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, only: [:show, :destroy]

  def create
    user = User.new(user_params)

    if user.save
      reset_session
      session[:user_id] = user.id

      render json: {
        id:    user.id,
        name:  user.name,
        email: user.email
      }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: {
      id:    current_user.id,
      name:  current_user.name,
      email: current_user.email
    }
  end

  def destroy
    current_user.destroy
    reset_session

    head :no_content
  end

  private

  def user_params 
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
