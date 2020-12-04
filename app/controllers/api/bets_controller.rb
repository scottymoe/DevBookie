class Api::BetsController < ApplicationController
  before_action :authenticate_user!, :set_user, only: [:index, :show, :create, :update, :destroy]

  def index
    render json: @user.bets
  end

  def show
    render json: Bet.find(params[:id])
  end

  def create
    bet = current_user.bets.new(bet_params)
    if bet.save
      render json: bet
    else
      render json: {errors: bet.errors}, status: 422
    end
  end

  def update
    bet = current_user.bets.find(params[:id])
    if(bet.update(bet_params))
      render json: bet
    else
      render json: {error:bet.errors}, status: :unprocessable_entity
    end
  end

  def delete
    bet = current_user.bets.find(params[:id])
    bet.destroy
    render json: {message: "Job Deleted"}
  end

  private

  def bet_params
    params.require(:bet).permit(:name, :description, :amount, :team, :spread, :teaser)
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
