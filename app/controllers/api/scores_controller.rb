class Api::ScoresController < ApplicationController
  def index
    render json: Score.all.order('time_elapsed ASC')
  end

  def create
    @new_score = Score.new(score_params)
    @old_score = Score.find_by(username: params[:score][:username])

    if @old_score

      if @new_score.time_elapsed < @old_score.time_elapsed
        @old_score.update(score_params)
        render json: @new_score
      else
        render json: ["That username already has a better score. Enter a different username or play again."],
          status: :expectation_failed
      end

    else

      if @new_score.save
        render json: @new_score, status: :created
      else
        render json: @new_score.errors.full_messages,
          status: :unprocessable_entity
      end

    end
  end

  private

  def score_params
    params.require(:score).permit(:username, :time_elapsed)
  end
end
