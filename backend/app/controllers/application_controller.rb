class ApplicationController < ActionController::API
  # rescue_from A, with: :B => A(データが見つからない)のエラーが発生したら、Bを実行する
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def authenticate_user
    return if current_user

    render json: { error: 'ログインしてください' }, status: :unauthorized
  end

  def render_not_found
    render json: { error: 'データが見つかりません' }, status: :not_found
  end
end
