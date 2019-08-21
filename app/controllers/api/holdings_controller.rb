class Api::HoldingsController < ApplicationController

	def list
			@user = User.find_by(id: params[:user_id])

		if @user
			render :show
		else
			render json: "unable to retrieve user's holdings"
		end
	end

	def create
		@user = User.find_by(id: params[:user_id])
		@holding = Holding.new(
			user_id: params[:user_id], symbol: params[:symbol],
			shares: params[:shares], price: params[:price]	)

		if @holding.save
			render :show
		else
			render json: "something went very, very wrong"
		end
	end

	def update
		@user = User.find_by(id: params[:user_id])
		@holding = Holding.find_by(id: params[:id])

		if @holding && @user
			@shares = @holding.shares + (params[:shares]).to_i
			@holding.update(shares: @shares)
			render :show
		else
			render json: "something went horribly wrong"
		end
	end
	
	def destroy
		@user = User.find_by(id: params[:user_id])
		@holding = Holding.find_by(id: params[:id])

		if @holding
			@holding.delete
			render :show
		else
			render json: "cannot destroy a non-existent holding"
		end
	end

	private

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