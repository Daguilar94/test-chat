class MessagesController < ApplicationController

  def index
    @messages = Message.includes(:user).where('room_id = ?', 1).order(created_at: :asc)
    render json: @messages, status: 200
  end

  def create
    message = Message.new(message_params)
    if message.save
      render json: message, status: 200
    else
      render json: { errors: message.errors.full_messages }, status: 200
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :user_id, :room_id)
  end
end
