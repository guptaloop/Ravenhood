class Api::UsersController < ApplicationController

  def show
    ## refactor how state stores gold
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      render json: ["no user found"], status: :not_found
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end

end