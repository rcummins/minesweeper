class Api::ScoresController < ApplicationController
  def index
    render json: Score.all.order('time_elapsed ASC')
  end

  def create
    @new_score = Score.new(score_params)

    if @new_score.save
      render json: @new_score, status: :created
    else
      render json: @new_score.errors.full_messages,
        status: :unprocessable_entity
    end
  end

  def update
    @score = Score.find(params[:id])

    if @score.update(score_params)
      render json: @score
    else
      render json: @score.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def score_params
    params.require(:score).permit(:username, :time_elapsed)
  end
end
