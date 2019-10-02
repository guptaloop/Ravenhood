class Api::HoldingsController < ApplicationController

	def list
		@user = User.find_by(id: params[:user_id])

		if @user
			render :show
		else
			render json: {}, status: :not_found
		end
	end

	def create
		@user = User.find_by(id: params[:user_id])
		@holding = Holding.new(
			user_id: params[:user_id], symbol: params[:symbol],
			shares: params[:shares], price: params[:price]	)
		@gold = @user.gold.to_i - (params[:shares].to_i * params[:price].to_i)

		if @gold < 0
			render json: ["Not enough gold available"], status: :unprocessable_entity
			return
		elsif @gold >= 0
			@holding.save!
			update_gold(@user.id, @gold)
			render :show
		end
	end
	
	def update
		@user = User.find_by(id: params[:user_id])
		@holding = Holding.find_by(id: params[:id])
		@paramsShares = params[:shares].to_i
		@totalShares = @paramsShares + @holding.shares.to_i
		@gold = @user.gold.to_i - (@paramsShares * @holding.price.to_i)
		
		if @paramsShares < 0 && @totalShares < 0
			render json: ["Not enough shares"], status: :unprocessable_entity
			return
		elsif @paramsShares < 0 && @totalShares > 0
			@holding.update(shares: @totalShares)
			@holding.save!
			update_gold(@user.id, @gold)
			render :show
		elsif @paramsShares > 0 && @gold < 0
			render json: ["Not enough gold available"], status: :unprocessable_entity
			return
		elsif @paramsShares > 0 && @gold > 0
			@holding.update(shares: @totalShares)
			@holding.save!
			update_gold(@user.id, @gold)
			render :show
		end
	end
	
	def destroy
		@user = User.find_by(id: params[:user_id])
		@holding = Holding.find_by(id: params[:id])
		@gold = @holding.shares.to_i * @holding.price.to_i
		
		if !@holding
			render json: ['holding does not exist'], status: :unprocessable_entity
			return
		elsif @holding && @user
			@holding.delete
			update_gold(@user.id, @gold)
			render :show
		end
	end

	private

	def update_gold(user_id, gold)
    @user = User.find_by(id: user_id)

    if @user
			@user.update(gold: gold)
			@user.save!
			return
    else
      render json: {}, status: :unprocessable_entity
    end   
  end

end