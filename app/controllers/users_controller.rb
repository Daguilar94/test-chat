class UsersController < ApplicationController
  # protect_from_forgery with: :null_session

  def index
    users = User.where('room_id = ?', 1)
    render json: users, status: 200
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 200
    end
  end

  private

  def user_params
    params.require(:user).permit(:nickname, :room_id)
  end
end
