class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email].to_s.downcase)

    if user && user.authenticate(params[:password])
      reset_session
      session[:user_id] = user.id

      render json: {
        id:    user.id,
        name:  user.name,
        email: user.email
      }, status: :ok
    else
                                                                      # HTTPステータスコード 401
      render json: { error: 'メールアドレスまたはパスワードが違います' }, status: :unauthorized
    end
  end

  def destroy
    reset_session

    head :no_content
  end
end
