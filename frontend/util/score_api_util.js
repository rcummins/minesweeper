export const fetchScores = () => (
  $.ajax({
    method: 'GET',
    url: '/api/scores'
  })
);

export const createScore = score => (
  $.ajax({
    method: 'POST',
    url: '/api/scores',
    data: score
  })
);
