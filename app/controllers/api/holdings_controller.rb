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
		
		@gold = @user.gold.to_i - (params[:shares] * params[:price])

		if @gold < 0
			render json: ["Not enough gold available"], status: :unprocessable_entity
		elsif @gold >= 0
			@holding.save!
			update_gold(params[:user_id], @gold)
			render :show
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

	def update_gold(user_id, gold)
    @user = User.find_by(id: user_id)

    if @user
      @user.update(gold: gold)
      render :show
    else
      render json: {}, status: :unprocessable_entity
    end   
  end

end