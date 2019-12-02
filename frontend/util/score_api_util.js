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

export const updateScore = score => (
  $.ajax({
    method: 'PUT',
    url: `/api/scores/${score.score.id}`,
    data: score
  })
);
