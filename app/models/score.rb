class Score < ApplicationRecord
  validates :username, :time_elapsed, presence: true
end
