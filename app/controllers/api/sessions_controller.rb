class Api::SessionsController < ApplicationController

  def new
    
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username], params[:user][:password]
    )
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Unable to log in with provided credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["No user currently signed in"], status: 404
    end
  end

  def gold
    @user = User.find_by(id: params[:user_id])
    @gold = (params[:gold]).to_i

    if @user.gold > @gold
      @newGold = @user.gold - @gold
      @user.update(gold: @newGold)
      render "api/users/show"
      return
    else
      render json: ["Not enough gold available"], status: 404
      return
    end   
  end

end