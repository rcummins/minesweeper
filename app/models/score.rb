class Score < ApplicationRecord
  validates :username, length: { maximum: 30 }
  validates :time_elapsed, presence: true
end
