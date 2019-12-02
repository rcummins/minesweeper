class Api::ScoresController < ApplicationController
  def index
    @scores = Score.all
    render :index
  end

  def create
    @score = Score.new(score_params)

    if @score.save
      render :show, status: :created
    else
      render json: @score.errors.full_messages,
        status: :unprocessable_entity
    end
  end

  def update
    @score = Score.find(params[:id])

    if @score.update(score_params)
      render :show
    else
      render json: @score.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def score_params
    params.require(:score).permit(:username, :time_elapsed)
  end
end
