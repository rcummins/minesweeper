@scores.each do |score|
  json.set! score.id do
    json.partial! 'api/scores/score', score: score
  end
end
