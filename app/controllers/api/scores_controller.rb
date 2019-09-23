class Api::ScoresController < ApplicationController
  def index
    render json: Score.all.order('time_elapsed ASC')
  end

  def create
    @score = Score.new(score_params)

    if @score.save
      render json: @score, status: :created
    else
      render json: @score.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def score_params
    params.require(:score).permit(:username, :time_elapsed)
  end
end
